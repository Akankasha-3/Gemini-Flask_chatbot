
# 🤖 Gemini Flask Chatbot
This project is a simple web-based chatbot powered by Google's Gemini (Generative AI) API, developed using Flask.
---
## 🚀 Features
- Real-time chatbot interaction using Flask.
- Powered by Google's Gemini API to generate responses based on user input.
- User-friendly interface built with HTML, CSS, and JavaScript.
---
## 💻 Tech Stack
- **Backend**: Flask (Python)
- **AI**: Google Gemini API
- **Frontend**: HTML, CSS, JavaScript
- **Hosting**: Local development (Flask server)
---
## 📁 Project Structure
Gemini-Flask_chatbot/
├── app.py                  # Flask backend code
├── templates/
│   ├── index.html          # Frontend HTML UI
│   ├── style.css           # Page styling
│   └── script.js           # JavaScript for handling user input and communication with Flask backend
└── README.md               # Project documentation (you're here!)
---
## 🛠️ Setup Instructions
### 1. Clone the repository
Start by cloning this repository to your local machine:

git clone https://github.com/Akankasha-3/Gemini-Flask_chatbot.git
cd Gemini-Flask_chatbot
### 2. Install Dependencies
Make sure you have Python installed, then install the necessary Python libraries:


pip install flask google-generativeai
### 3. Replace Your API Key
In the `app.py` file, replace the `"Your API key"` placeholder with your **actual Google Gemini API key**.


genai.configure(api_key="Your API key")
### 4. Run the Application
Once you have all the dependencies installed, run the application:


python app.py



