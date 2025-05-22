import os
import joblib
from flask import Flask, request, jsonify
from flask_cors import CORS

# Initialize Flask app
app = Flask(__name__)

# Enable CORS
CORS(app)


# Load the model and vectorizer
model = joblib.load("model/model.pkl")
vectorizer = joblib.load("model/vectorizer.pkl")

# Map the sentiment label
sentiment = {
    0: "negative",
    1: "neutral",
    2: "positive"
}

@app.route("/")
def index():
    return jsonify("API is running.")

@app.route("/api/predict", methods=["POST"])
def predict_sentiment():
    input_data = request.json.get("text")
    input_vectorized = vectorizer.transform([input_data])
    prediction = model.predict(input_vectorized)
    response = {
        "sentiment": sentiment[prediction[0]]
    }
    return jsonify(response)

if __name__ == "__main__":
    # app.run(debug=True, port=8000)
    port = int(os.environ.get("PORT", 8000))
    app.run(host="0.0.0.0", port=port)