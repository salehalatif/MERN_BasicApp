
//npm i
//npm start
//node server.js
//http://localhost:5000
//http://localhost:5000/api
//http://localhost:5000/api/messages

const express = require('express');
//connecting your frontend and backend on different ports (e.g., frontend on 3000 and backend on 5000), you might run into CORS (Cross-Origin Resource Sharing) issues.
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

app.use(cors());  // Enable CORS for all routes

require('dotenv').config();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(MONGO_URI);

// Schema & Model
const messageSchema = new mongoose.Schema({ text: String });
const Message = mongoose.model('Message', messageSchema);

const newsSchema = new mongoose.Schema({ text: String });
const News = mongoose.model('News', newsSchema);

// A simple GET route for the root
app.get('/', (req, res) => {
  res.send('Welcome to the root route!');
});

// A simple GET route for the /api endpoint
app.get('/api', (req, res) => {
  res.json({ message: 'This is a response from the API.' });
});

// API Route to fetch all messages
app.get('/api/messages', async (req, res) => {
  try {
    const messages = await Message.find();  // Fetch all messages from DB
    res.json(messages); // Return all messages in JSON format
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch messages' });
  }
});

// API Route to fetch all news
app.get('/api/news', async (req, res) => {
  try {
    const news = await News.find();  // Fetch all news from DB
    res.json(news); // Return all news in JSON format
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch news' });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
