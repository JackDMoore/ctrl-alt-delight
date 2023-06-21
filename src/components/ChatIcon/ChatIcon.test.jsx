// import React from "react";
// import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
// import { screen, render, cleanup, fireEvent } from "@testing-library/react";
// import matchers from "@testing-library/jest-dom/matchers";
// expect.extend(matchers);

// import ChatIcon from "./ChatIcon";
// import chaticon from "./chatboticon.png";

// describe("ChatIcon", () => {
//   beforeEach(() => {
//     render(<ChatIcon />);
//   });

//   afterEach(() => {
//     cleanup();
//   });

//   it("renders the chat icon", () => {
//     const chatIcon = screen.getByAltText("Chat Icon");
//     expect(chatIcon).toBeInTheDocument();
//     expect(chatIcon.getAttribute("src")).toEqual(chaticon);
//   });

//   it("calls the onClick prop when clicked", () => {
//     const onClickMock = jest.fn();
//     render(<ChatIcon onClick={onClickMock} />);
//     const chatIcon = screen.getByAltText("Chat Icon");
//     fireEvent.click(chatIcon);
//     expect(onClickMock).toHaveBeenCalled();
//   });

//   // Add more tests if needed

// });
