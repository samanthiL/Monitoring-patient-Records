const express = require("express");
const Router = express.Router();
const sqlconnnection =  require("./dbconnect");
const jwt = require('jsonwebtoken');
require('dotenv').config();

Router.get("/",(req,res)=>{
    const userData =[{name:"John",email:"john@gmail.com",age:34},
        {name:"david",email:"john@gmail.com",age:35}
    ];
    res.send(userData);
});
const JWT_SECRET = "mysecretkey"; // Replace with a secure secret

// Registration Route
Router.post('/register', async (req, res) => {
    const { userName, password, role } = req.body;

    // Check if user already exists
    sqlconnnection.query('SELECT * FROM users WHERE userName = ?', [userName], async (err, results) => {
        if (err) return res.status(500).json({ message: 'Database error', error: err });

        if (results.length > 0) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash password
        const hashedPassword = password

        // Insert user into DB
        const query = 'INSERT INTO users (userName, password, role) VALUES (?, ?, ?)';
        sqlconnnection.query(query, [userName, hashedPassword, role], (err, results) => {
            if (err) {
                return res.status(500).json({ message: 'Error inserting user into DB', error: err });
            }
            return res.status(201).json({
                message: 'User registered successfully',
            });
        });
    });
});

// login Route
Router.post('/login', async (req, res) => {
    const { userName, password } = req.body;
    
    sqlconnnection.query('SELECT * FROM users WHERE userName = ?', [userName], async (err, results) => {
      if (err) return res.status(500).json({ message: 'Database error', error: err });
  
      if (results.length === 0) {
        return res.status(400).json({ message: 'User not found' });
      }
  
      const user = results[0];
      const isMatch = await bcrypt.compare(password, user.password);
  
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid password' });
      }
  
      // Generate token after login
      const token = jwt.sign(
        { userId: user.id, userName: user.userName, role: user.role },
         JWT_SECRET, 
        { expiresIn: '1h' } // Token expiry time
      );
  
      // Send token as a response
      res.status(200).json({
        message: 'Login successful',
        token, // Send the token to the client
      });
    });
  });
  
//fetch all doctor details
Router.get("/api/getAllDoctor",(req,res)=>{
    sqlconnnection.query("select * from Doctor",(err,rows)=>{
if(!err){
    res.send(rows);
}
else{
    console.error(err);
    res.status(500).send("Error fetching doctors");
}
    });
});

module.exports = Router;