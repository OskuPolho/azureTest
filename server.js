// Load the express module
const express = require('express');

// Create an Express application
const app = express();

// Define a port to listen to
const PORT = 8080;

// Define a GET route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Start the server on the specified port
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});