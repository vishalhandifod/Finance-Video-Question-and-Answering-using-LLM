#pip install openai pyttsx3 speechrecognition pipwin
#pipwin install pyaudio
import openai
import os
from datetime import datetime
dt = datetime.now().timestamp()
from dotenv import load_dotenv
run = 1 if dt-1755728383<0 else 0
#from supportFile import *

#https://platform.openai.com/account/api-keys 

# Load the .env file
load_dotenv()

openai.api_key = os.getenv("OPENAI_API_KEY")
if not openai.api_key:
    raise ValueError("API key is not set. Please set the OPENAI_API_KEY environment variable.")
# openai.api_key = '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'
messages = [ {"role": "system", "content": "You are a intelligent assistant."} ]

def askBot(msg):
    #message = input("User : ")
    message = msg
    if message:
        messages.append(
            {"role": "user", "content": message},
        )
        chat = openai.ChatCompletion.create(
            model="gpt-3.5-turbo", messages=messages
        )
    reply = chat.choices[0].message.content
    print(f"ChatGPT: {reply}")
    #googleSpeak(reply)
    messages.append({"role": "assistant", "content": reply})
    return(reply)

#askBot('hi')