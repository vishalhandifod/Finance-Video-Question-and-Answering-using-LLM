# Finance Video Question Answering using Large Language Models 🌟
This project is designed to help finance professionals, students, and researchers quickly extract and understand financial information from videos using AI-powered question-answering. By leveraging advanced large language models (LLMs), users can ask questions about finance-related video content and receive accurate, context-aware answers.

---

## Features 📊
- Video Question Answering using Large Language Models
- Finance-related video analysis and response generation
- Easy-to-set-up project using a Python-based environment

--- 

## Getting Started 📝

### Prerequisites:

Before running this project, make sure you have the following installed on your machine:

1. **Install Python 3.x:**
   Download and install Python from the official website: [python.org](https://www.python.org/downloads/).

2. **Install pip:**
   `pip` is included with Python 3. Ensure it's installed by running:
   ```bash
   python -m ensurepip --upgrade

### Setup Instructions:

1. **Clone the repository:**
   Start by cloning the repository to your local machine:

   ```bash
   git clone https://github.com/vishalhandifod/Finance-Video-Question-and-Answering-using-LLM.git

2. **Set up the virtual environment:**
   For Windows users

   ```bash
   pip install virtualenv
   python -m venv venv
   venv\Scripts\activate
- If the above doesn't work, you can also try:
  ```bash
   virtualenv venv
   venv\Scripts\activate

3. **Install required Python packages:**
   After activating the virtual environment, install all the dependencies from the requirements.txt file:

   ```bash
   pip install -r requirements.txt

4. **Install additional libraries:**
   
   ```bash
   pip install openai pyttsx3 speechrecognition
   pip install pipwin
   pipwin install pyaudio
   pip install spacy
   pip install scikit-learn
   python -m spacy download en_core_web_sm

5. **Run the project:**
   Once the environment is set up and the dependencies are installed, you can start the project by running the following command:

   ```bash
   python main.py

---

## Setting Up API Keys 🔐
How to set up any necessary API keys or environment variables:

1. Create an account on [OpenAI](https://beta.openai.com/signup/)
2. Obtain your API key from the [OpenAI dashboard](https://beta.openai.com/account/api-keys)
3. Create a `.env` file in the root of your project and add your API key:

   ```bash
   OPENAI_API_KEY=your-api-key-here
   ```
   
---

## Demo 🚀
Coming soon....

---

## Known Issues & Troubleshooting ⚠️

- **Issue**: Error when installing `pyaudio` on Windows.
- **Solution**: Install `pyaudio` using `pipwin`:
  ```bash
  pip install pipwin
  pipwin install pyaudio
  ```

- **Issue**: `ModuleNotFoundError` for `flask`.
- **Solution**: Make sure to activate your virtual environment before running the project:
  ```bash
  venv\Scripts\activate

- **Test Instructions** (if applicable)
If your project has unit tests or needs to be tested, provide instructions on how users can run them: Running Tests
To ensure everything is working as expected, run the tests:
   ```bash
   python -m unittest discover
   ```
   
---

## License ⚖️
- This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---



