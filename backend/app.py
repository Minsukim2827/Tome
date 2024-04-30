from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import requests
import os
import logging

load_dotenv()

app = Flask(__name__)
CORS(app, resources={r"/search_books*": {"origins": "*"}})

@app.route('/search_books', methods=['GET'])
def search_books():
    query = request.args.get('query')
    api_key = os.getenv('GOOGLE_BOOKS_API_KEY')
    url = f"https://www.googleapis.com/books/v1/volumes?q={query}&key={api_key}"
    response = requests.get(url)
    books = response.json().get('items', [])

    # Add debug to print what books are fetched
    logging.debug(f"Fetched books: {books}")
    #debugging
    print(books[0])

    filtered_books = [
        book for book in books
        if 'tags' in book.get('volumeInfo', {}) and 
           ('fantasy' in book['volumeInfo']['tags'] or 'sci-fi' in book['volumeInfo']['tags'])
    ]

    # Debugging the filtered results
    logging.debug(f"Filtered books: {filtered_books}")

    return jsonify(filtered_books[:4])  # Return top 4 books

if __name__ == '__main__':
    app.run(debug=True)