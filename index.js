const express = require('express');
const jwt = require('jsonwebtoken');
const session = require('express-session');
const customer_routes = require('./router/auth_users.js').authenticated;
const genl_routes = require('./router/general.js').general;

const app = express();
const JWT_SECRET = 'myVeryVeryImpSecretelyKey';
app.use(express.json());  // to parse JSON bodies

// Middleware to use JWT for authenticating requests that require it
const authenticateToken = (req, res, next) => {
    const token = req.header("Authorization") && req.header("Authorization").split(' ')[1];
    console.log('TOKEN in index :::::', token);
    if (!token) {
      return res.status(403).json({ message: "Access denied. No token provided." });
    }
    jwt.verify(token, JWT_SECRET, (err, user) => {
      console.log('token inside verify ::::', token);
      console.log('user logging ::::', user);
      if (err) {
        return res.status(400).json({ message: "Invalid token" });
      }
      req.user = user; 
      next();
    });
  };
  

// Session middleware if you want to use server-side sessions (optional if using JWT)
app.use("/customer", session({ secret: "fingerprint_customer", resave: true, saveUninitialized: true }));

// Apply JWT authentication middleware to routes that need authentication
app.use("/customer/auth/*", authenticateToken);

// Public routes (general routes) that don't need authentication
app.use("/", genl_routes);

// Customer routes that require JWT authentication
app.use("/customer", customer_routes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
