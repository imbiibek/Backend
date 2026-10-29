import express from "express";
import dotenv from "dotenv"
dotenv.config()
import connectDb from "./config/db.js";
import User from "./models/User.js";

const app = express();
const port = 3000;

app.use(express.json());
connectDb()


app.post("/", async (req, res) => {
    try {
        const {name, email, number} = req.body;
        const user = await User.create({ name, email, number });
        res.status(201).json({ message: "data created successfully", user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});



app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
    
})

