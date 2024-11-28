const express = require('express');
const jwt = require('jsonwebtoken');
let books = require("./booksdb.js");
const regd_users = express.Router();

let users = [];
const JWT_SECRET = 'myVeryVeryImpSecretelyKey';

const isValid = (username)=>{ //returns boolean
//write code to check is the username is valid
}

const authenticatedUser = (username,password)=>{ //returns boolean
//write code to check if username and password match the one we have in records.
}

//only registered users can login
regd_users.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (!users[username]) {
    return res.status(404).json({ message: "User not found" }); 
  }
  if (users[username].password === password) {
    const jwtToken = jwt.sign({username}, JWT_SECRET, {expiresIn: '1hr'});

    return res.status(200).json({ message: "Customer logged in Successfully", token: jwtToken });
  }
  return res.status(401).json({ message: "Invalid credentials" }); 
});


// Add a book review
regd_users.put("/auth/review/:isbn", (req, res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;
