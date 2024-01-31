const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
const IPADDR = '192.168.119.81'
// Use body-parser middleware to parse JSON requests
app.use(bodyParser.json());

// Handle POST requests to the root endpoint
app.post('/', (req, res) => {
  // Log the received data to the console
  console.log('Received POST request:', req.body);

  // Respond with a simple message
  res.send('Data received successfully!');
});

// Start the server
app.listen(port, IPADDR, () => {
  console.log(`Server is listening on port ${IPADDR}:${port}`);
});
