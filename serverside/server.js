import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';

const server = express();
let PORT = 3000;

// Middleware to parse JSON
server.use(express.json());

mongoose.connect(process.env.DB_LOCATION, { 
    autoIndex: true 
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("Failed to connect to MongoDB", err);
});

server.post("/signup", (req, res) => {
    res.json(req.body); // You might want to handle actual signup logic here
});

server.listen(PORT, () => {
    console.log('listening on port -> ' + PORT); 
});
