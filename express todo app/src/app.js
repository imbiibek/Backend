// create server 

const express = require("express")

const app = express()
app.use(express.json())

const notes = []

/* title, description */
/* POST  /notes */

app.post('/notes', (req, res) => {
    notes.push(req.body)

    res.status(201).json({
        message: "note created successfully"
    })
})

/* GET /notes */ 
app.get('/notes', (req,res) => {

    res.status(200).json({
        message: "notes fetched successfully",
        notes: notes
    })
})


module.exports = app;