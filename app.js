const express = require('express');

// Express server handling requests and responses
const app = express();

// Middleware for static files
app.use(express.static('public'));

// Server routes
app.get('/', (request, response) => response.sendFile(__dirname + '/views/index.html'));
app.get('/about-me', (request, response) => response.sendFile(__dirname + '/views/about.html'));

// Server started
app.listen(3000, () => console.log('Listening on port 3000'));