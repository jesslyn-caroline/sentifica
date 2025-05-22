import pandas as pd
import joblib
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.metrics import classification_report, accuracy_score

# Load the datasets and preview

train1_df = pd.read_csv('data/train_df.csv')

train2_df = pd.read_csv('data/train2_df.csv')

train3_df = pd.read_json('data/train3.jsonl', lines=True)
train3_df["sentiment"] = train3_df["label_text"]
train3_df = train3_df.drop(columns=["label_text"])

train_df = pd.concat([train1_df, train2_df, train3_df], ignore_index=True)

test_df = pd.read_csv('data/test_df.csv')

# Preview of the dataset that will be used for training
print(train_df[["text", "sentiment"]])

# Map the sentiment label
sentiment = {
    0: "negative",
    1: "neutral",
    2: "positive"
}

X_train = train_df["text"].astype(str).fillna("")
y_train = train_df["label"]

X_test = test_df["text"].astype(str).fillna("")
y_test = test_df["label"]

# Vectorize the text data using TfidfVectorizer
vectorizer = TfidfVectorizer()
X_train_vectorized = vectorizer.fit_transform(X_train)
X_test_vectorized = vectorizer.transform(X_test)

# Train a Multinomial Naive Bayes classifier
model = MultinomialNB()
model.fit(X_train_vectorized, y_train)

# Make predictions on the test data based on what the model has learned from the training
y_prediction = model.predict(X_test_vectorized)

# Evaluate the accuracy of the trained model
accuracy = accuracy_score(y_test, y_prediction)
print(f"Model Accuracy: {accuracy:.2f}")

# Classification Report
print(classification_report(y_test, y_prediction, target_names=sentiment.values()))

# Save the model and vectorizer
joblib.dump(model, "model.pkl")
joblib.dump(vectorizer, "vectorizer.pkl")