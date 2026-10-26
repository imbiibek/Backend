const mongoose = require('mongoose');

async function connectDB() {

    await mongoose.connect("mongodb+srv://yt:9jK9kO1XGBFyFJbT@backend-101.awotvug.mongodb.net/project-1")

    console.log("Connected to DB");

}

module.exports = connectDB;