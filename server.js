// ====== Requires ====== //
const express = require('express');
const app = express();


// ====== DB Connection ====== //



// ====== Middleware location ====== //
const fruits = ['apple', 'banana', 'pear'];


// ====== Routes ====== //
// I.N.D.U.C.E.S (Index, New, Delete, Update, Create, Edit, Show)

// Index
app.get('/fruits', (req, res) => {
    res.send(fruits);
});

// New

// Delete

// Update

// Create

// Edit

// Show

// ====== Listening for port ====== //
app.listen(3000, () => {
    console.log('listening');
});