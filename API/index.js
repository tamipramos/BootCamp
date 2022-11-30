//const http = require('http')
const { response, request } = require('express');
const express = require('express')
notes = [
    {
      id: 1,
      content: 'HTML is easy',
      date: '2019-05-30T17:30:31.098Z',
      important: true,
    },
    {
      id: 2,
      content: 'Browser can execute only JavaScript',
      date: '2019-05-30T18:39:34.091Z',
      important: false,
    },
    {
      id: 3,
      content: 'GET and POST are the most important methods of HTTP protocol',
      date: '2019-05-30T19:20:14.298Z',
      important: true,
    },
  ]

/*
const app = http.createServer((request, response) => {

    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify(notes))
})
*/

const app = express()
app.get('/', (request, response) => {
    response.send('<h1>aaaaa</h1>')
});

app.get('/api/notes', (request, response) =>{
    response.json(notes)
});

app.get('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    const note = notes.find(note => note.id === id)
    if (note){
        response.json(note)
    }
    else{
        response.status(404).end()
    }
    
});

app.delete('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    notes = notes.filter(note => note.id != id)
    response.status(204).end()
});

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Corriendo server en el puerto: [${PORT}]`)
});