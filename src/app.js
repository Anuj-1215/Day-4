const express = require('express')



const app = express()

app.use(express.json())


const notes = []

app.post('/notes', (req,res)=>{
    res.send('note created.')
    console.log(req.body);
    notes.push(req.body)
    console.log(notes);
    
})

app.get('/notes', (req,res)=>{
    res.send(notes)
})

app.delete('/notes/:index', (req,res)=>{
    res.send('note deleted successfully.')
    delete notes[req.params.index]
})

app.patch('/notes/:index', (req,res)=>{
    notes[req.params.index].description = req.body.description

    res.send('note updated successfully.')
})

module.exports = app