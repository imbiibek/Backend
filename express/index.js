import express from "express";
import dotenv from "dotenv"
dotenv.config()
import connectDb from "./config/db.js";
const app = express();
const port = 3000;

app.use(express.json());
connectDb()
app.get("/", (req, res) => {
    res.send("<h1>Hello World</h1>")
})


app.post("/",(req,res)=>{
  console.log(req.body)
 const {name} = req.body
 res.json({message:"data create successfully",name})
})

app.get("/about", (req, res) => {
    res.send("About")
})


app.put("/user/bibek", (req, res) => {
    res.sendStatus(200);
})

app.patch("/user/bibek", (req,res) => {
    res.sendStatus(200);
})

app.delete("/user/bibek", (req,res) => {
    res.sendStatus(200);
})

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
    
})

