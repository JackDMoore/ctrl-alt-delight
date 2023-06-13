// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");

// const { Configuration, OpenAIApi } = require("openai");

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

// Set up the server
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Set up the ChatGPT endpoint
app.post("/chat", async (req, res) => {
  // Get the prompt from the request
  const { prompt } = req.body;

  // Generate a response with ChatGPT
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: prompt,
  });
  res.send(completion.data.choices[0].text);
});

// Start the server
const port = 5173;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
