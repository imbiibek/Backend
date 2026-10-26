const mongoose = require("mongoose");

async function connectDB() {
    await mongoose.connect("mongodb+srv://yt:<password>@backend-101.awotvug.mongodb.net/halley")

    console.log("Connected to DB");
    
}

module.exports = connectDB