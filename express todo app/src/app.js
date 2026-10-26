// create server  9jK9kO1XGBFyFJbT

const express = require("express")
const noteModel = require("./models/note.model")

const app = express()
app.use(express.json())

const notes = []

/* title, description */
/* POST  /notes */

app.post('/notes', async (req, res) => {
    
    const data = req.body /* { title, description } */
    await noteModel.create({
        title: data.title,
        description: data.description
    })

    res.status(201).json({
        message: "note created successfully"
    })
})

/* GET /notes */ 
app.get('/notes', async (req,res) => {

    const notes = await noteModel.find()

    /* 
    
    find => [{}, {}] or []
    findOne => {} or null
    
    */

    res.status(200).json({
        message: "notes fetched successfully",
        notes: notes
    })
})

/*  delete /notes/1  */

app.delete('/notes/:id', async (req, res) => {
    const id = req.params.id 

    await noteModel.findOneAndDelete({
        _id: id
    })
    
    res.status(200).json({
        message: "notes deleted successfully "
    })
})

/*  patch /notes/1  */

app.patch("/notes/:id", async (req, res) => {
    const id = req.params.id
    const description = req.body.description

    await noteModel.findOneAndUpdate({_id: id}, {description: description})

    res.status(200).json({
        message: "note updated successfully"
    })
})

module.exports = app;