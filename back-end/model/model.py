import pandas as pd
import re

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import classification_report, accuracy_score

import joblib

# Load the datasets and preview

train1_df = pd.read_csv('./model/data/train_df.csv')

train2_df = pd.read_csv('./model/data/train2_df.csv')

train3_df = pd.read_json('./model/data/train3.jsonl', lines=True)
train3_df["sentiment"] = train3_df["label_text"]
train3_df = train3_df.drop(columns=["label_text"])

train_df = pd.concat([train1_df, train2_df, train3_df], ignore_index=True)

test_df = pd.read_csv('./model/data/test_df.csv')

# Preview of the dataset that will be used for training
print("Dataset Preview:")
print("-" * 100)
print(train_df[["text", "sentiment"]].head(), "\n")

# Map the sentiment label
sentiment = {
    0: "negative",
    1: "neutral",
    2: "positive"
}

# Data Cleaning and Tokenization

def clean_text(text):
    text = str(text)
    text = re.sub(r'(.)\1{2,}', r'\1\1', text)
    text = re.sub('[^a-zA-Z]', ' ', text).lower()
    return text

train_df["cleaned_text"] = train_df["text"].apply(lambda x: clean_text(x))
test_df["cleaned_text"] = test_df["text"].apply(lambda x: clean_text(x))

method = {
    "Naive Bayes" : MultinomialNB(),
    "Logistic Regression" : LogisticRegression()
}

model = {}

X_train = train_df["cleaned_text"].astype(str).fillna("")
y_train = train_df["label"]

X_test = test_df["cleaned_text"].astype(str).fillna("")
y_test = test_df["label"]

# Vectorize the text data using TfidfVectorizer
vectorizer = TfidfVectorizer()
X_train_vectorized = vectorizer.fit_transform(X_train)
X_test_vectorized = vectorizer.transform(X_test)

# Data training with Multinomial Naive Bayes and Logistic Regression
for key in method:
    model[key] = method[key]
    model[key].fit(X_train_vectorized, y_train)

    # Make predictions on the test data based on what the model has learned from the training
    y_prediction = model[key].predict(X_test_vectorized)

    print(key)
    accuracy = accuracy_score(y_test, y_prediction) * 100
    print(f"Model Accuration: {accuracy:.2f}%")

    print(classification_report(y_test, y_prediction))

# Classification Report
print(classification_report(y_test, y_prediction, target_names=sentiment.values()))

# Save the model and vectorizer
joblib.dump(model["Logistic Regression"], "model.pkl")
joblib.dump(vectorizer, "vectorizer.pkl")