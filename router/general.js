const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


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
public_users.get('/',function (req, res) {
  try {
    return res.status(200).json(books);
  } catch (error) {
    return res.status(500).json({ message: "Error fetching book list", error: error.message });
  }
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn', function (req, res) {
  const isbn = req.params.isbn;  
  const book = books[isbn];  
  if (book) {
    return res.status(200).json(book);
  } else {
    return res.status(404).json({ message: "Book not found" });
  }
});
  
// Get book details based on author
public_users.get('/author/:author', function (req, res) {
  const authorName = req.params.author;  
  const booksByAuthor = Object.values(books).filter(book => book.author.toLowerCase().includes(authorName.toLowerCase()));
  
  if (booksByAuthor.length > 0) {
    return res.status(200).json(booksByAuthor);
  } else {
    return res.status(404).json({ message: `No books found by author: ${authorName}` });
  }
});


// Get all books based on title
public_users.get('/title/:title', function (req, res) {
  const title = req.params.title;  
  const booksByTitle = Object.values(books).filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
  if (booksByTitle.length > 0) {
    return res.status(200).json(booksByTitle);
  } else {
    return res.status(404).json({ message: `No books found with title: ${title}` });
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
