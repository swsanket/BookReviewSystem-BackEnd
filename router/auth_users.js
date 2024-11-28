const express = require('express');
const jwt = require('jsonwebtoken');
let books = require("./booksdb.js"); // Import the books database
const regd_users = express.Router();

let users = [{
  "username": "sanket",
  "password": "password123"
},{
  "username": "omkar",
  "password": "password456"
}
];

const JWT_SECRET = 'myVeryVeryImpSecretelyKey';

// Check if user exists
const isValid = (username) => {
  return users.some(user => user.username === username);
};

// Authenticate user with username and password
const authenticatedUser = (username, password) => {
  const user = users.find(user => user.username === username);
  return user && user.password === password;
};

// Login route for user authentication
regd_users.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (req.session && req.session.token) {
    return res.status(400).json({ message: "User is already logged in.", token: req.session.token });
  }
  if (!isValid(username)) {
    return res.status(404).json({ message: "User not found" });
  }
  if (authenticatedUser(username, password)) {
    const jwtToken = jwt.sign({username}, JWT_SECRET, { expiresIn: '2h' });
    req.session.token = jwtToken;
    return res.status(200).json({ message: "Customer logged in successfully", token: jwtToken });
  }
  return res.status(401).json({ message: "Invalid credentials" });
});


// Middleware to authenticate JWT token
const authenticateToken = (req, res, next) => {
  
  const token = req.header("Authorization");
  console.log('TOKEN :::::', token);

  if (!token) {
    return res.status(403).json({ message: "Access denied. No token provided." });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    console.log('USER ::::', user);

    if (err) {
      return res.status(400).json({ message: "Invalid token" });
    }
    req.user = user;
    next(); 
  });
};

// Add or modify a book review (any review text is valid)
regd_users.put("/auth/review/:isbn", (req, res) => {
  const { isbn } = req.params;
  const { review } = req.query;
  const username = req.user.username; 
  
  if (!review) {
    return res.status(400).json({ message: "Review text is required." });
  }
  
  if (!books[isbn]) {
    return res.status(404).json({ message: "Book not found." });
  }

  if (!books[isbn].reviews) {
    books[isbn].reviews = {};
  }
  books[isbn].reviews[username] = review;
  return res.status(200).json({ message: "Review added/updated successfully." });
});

module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;
