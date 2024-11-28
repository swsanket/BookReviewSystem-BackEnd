const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();
const axios = require('axios'); 


public_users.post("/register", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: "Username and password are required" });
  }
  if (users[username]) {
    return res.status(409).json({ message: "Username already exists" });
  }
  users[username] = { password };
  return res.status(201).json({ message: "User registered successfully" });
});


// Get the book list available in the shop
async function getBooks() {
  try {
    const response = await axios.get('http://your_api_endpoint_here');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching the book list:", error.message);
    throw error;
  }
}

public_users.get('/', async function (req, res) {
  try {
    const books = await getBooks();
    return res.status(200).json(books);
  } catch (error) {
    return res.status(500).json({ message: "Error fetching book list", error: error.message });
  }
});

// Get book details based on ISBN
async function getBookByIsbn(isbn) {
  try {
    const response = await axios.get(`http://your_api_endpoint_here/isbn/${isbn}`);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching book: " + error.message);
  }
}

public_users.get('/isbn/:isbn', async function (req, res) {
  const isbn = req.params.isbn;
  try {
    const book = await getBookByIsbn(isbn);
    if (book) {
      return res.status(200).json(book);
    } else {
      return res.status(404).json({ message: "Book not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});
  
// Get book details based on author
async function getBooksByAuthor(authorName) {
  try {
    const response = await axios.get(`http://your_api_endpoint_here/author/${authorName}`);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching books by author: " + error.message);
  }
}

public_users.get('/author/:author', async function (req, res) {
  const authorName = req.params.author;
  try {
    const booksByAuthor = await getBooksByAuthor(authorName);
    if (booksByAuthor.length > 0) {
      return res.status(200).json(booksByAuthor);
    } else {
      return res.status(404).json({ message: `No books found by author: ${authorName}` });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});


// Get all books based on title
async function getBooksByTitle(title) {
  try {
    const response = await axios.get(`http://your_api_endpoint_here/title/${title}`);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching books by title: " + error.message);
  }
}

public_users.get('/title/:title', async function (req, res) {
  const title = req.params.title;
  try {
    const booksByTitle = await getBooksByTitle(title);
    if (booksByTitle.length > 0) {
      return res.status(200).json(booksByTitle);
    } else {
      return res.status(404).json({ message: `No books found with title: ${title}` });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  const isbn = req.params.isbn;  
  const book = books[isbn];
  const reviews = book.reviews;
  if (book) {
    return res.status(200).json(reviews);
  } else {
    return res.status(404).json({ message: "reviews not found" });
  }
});

module.exports.general = public_users;
