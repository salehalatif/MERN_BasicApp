const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mern_example', { useNewUrlParser: true, useUnifiedTopology: true });

const messageSchema = new mongoose.Schema({ text: String });
const Message = mongoose.model('Message', messageSchema);

// Insert "Hello World" into MongoDB
Message.create({ text: "Hello World" }).then(() => {
    console.log("Message inserted");
    mongoose.connection.close();
});
