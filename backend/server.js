const express = require('express');
const mongoose = require('mongoose');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Schema & Model
const messageSchema = new mongoose.Schema({ text: String });
const Message = mongoose.model('Message', messageSchema);

// API Route
app.get('/api/message', async (req, res) => {
    const message = await Message.findOne(); // Fetch message from DB
    res.json(message);
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
