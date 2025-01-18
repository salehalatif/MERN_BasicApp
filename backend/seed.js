//To insert a message in DB
// execute in bash: node seed.js
const mongoose = require('mongoose');

require('dotenv').config();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(MONGO_URI);

const messageSchema = new mongoose.Schema({ text: String });
const Message = mongoose.model('Message', messageSchema);

// Insert "Hello World" into MongoDB
Message.create({ text: "Hello World 1" },{ text: "Hello World 2" }).then(() => {
    console.log("Message inserted");
    mongoose.connection.close();
});
