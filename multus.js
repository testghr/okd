const express = require('express');

// Create two instances of express
const app1 = express();
const app2 = express();

// Define the first server
app1.get('/', (req, res) => {
    res.send('Hello World from interface 1');
});

// Define the second server
app2.get('/', (req, res) => {
    res.send('Hello World from interface 2');
});

// Start the first server on address 127.0.0.1:3000
app1.listen(3000, '127.0.0.1', () => {
    console.log('Server 1 running at http://127.0.0.1:3000/');
});

// Start the second server on address 127.0.0.2:3001
//app2.listen(3001, '127.0.0.2', () => {
 /   console.log('Server 2 running at http://127.0.0.2:3001/');
//});