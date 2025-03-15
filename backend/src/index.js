const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health check route
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Define port
const PORT = process.env.PORT || 1337;

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
