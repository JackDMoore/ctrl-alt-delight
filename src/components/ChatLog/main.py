from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from pydantic import BaseModel

import requests

PRIVATE_KEY = '6764d317-f80b-4270-ab8e-216792c55705'

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class User(BaseModel):
    username: str

<<<<<<< HEAD
@app.post('/authenticate')
async def authenticate(user: User):
=======
@app.post('/authenticate') 
async def authenticate(user: User): 
>>>>>>> 53c08c94a68b6eefdfde454b5abe7c7f562fb620
    response = requests.put('https://api.chatengine.io/users/',
        data={
            "username": user.username,
            "secret": user.username,
            "first_name": user.username,
        },
        headers={ "Private-Key": PRIVATE_KEY }
    )
    return response.json()
