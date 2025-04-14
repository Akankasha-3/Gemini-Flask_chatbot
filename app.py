from flask import Flask, render_template, request, jsonify
import google.generativeai as genai

# Initialize the Generative AI client with your API key
client = genai.Client(api_key="Your API key")

# Define the generative model you want to use
model = genai.GenerativeModel('gemini-1.5-flash')

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/chat', methods=['POST'])
def chat_response():
    user_input = request.json.get('message')

    # Check if the message is provided
    if not user_input:
        return jsonify({"error": "No message provided"}), 400

    try:
        # Send the user input to the generative model and get response
        response = model.start_chat(history=[user_input]).text
        return jsonify({"response": response})
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)

