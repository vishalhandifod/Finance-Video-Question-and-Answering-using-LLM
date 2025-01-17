# Import libraries
import google.generativeai as genai
import os

# Replace with your Gemini API key (store securely using environment variables)
API_KEY = "AIzaSyAeiL2PMaQmoAwAQI2Mila3bFzCAPaKZe8"

def askBot(que):
    # Configure the API key
    genai.configure(api_key=API_KEY)

    # Choose a Gemini model (check available models at https://ai.google.dev/)
    model_name = "gemini-1.5-flash"  # Replace with your desired model

    # Create a generative model instance
    model = genai.GenerativeModel(model_name)

    # Text prompt for the model
    text_prompt = que

    # Generate text using the model
    response = model.generate_content(text_prompt)

    # Print the generated text
    print(response.text)
    return response.text


#print(gemini_response('hi'))