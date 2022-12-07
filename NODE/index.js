// const { response, request } = require('express')
require('dotenv').config()
require('./mongo.js')
const logger = require('./tools/logger')
const express = require('express')
const cors = require('cors')
const Note = require('./models/Note.js')
const notFound = require('./middlewares/notFound.js')
const badIndex = require('./middlewares/badIndex.js')

const app = express()
app.use(logger)
app.use(express.json())
app.use(cors())

app.get('/', (request, response, next) => {
  response.send('<h1>aaaaa</h1>')
})

app.get('/api/notes', (request, response) => {
  Note.find({}).then(notes => {
    response.json(notes)
  })
})

app.get('/api/notes/:id', (request, response, next) => {
  const { id } = request.params
  Note.findById(id).then(note => {
    if (note) {
      response.json(note)
    } else {
      response.status(404).end()
    }
  }).catch(err => {
    next(err)
  })
})

app.put('/api/notes/:id', (request, response, next) => {
  const { id } = request.params
  const note = request.body
  const newNoteInfo = {
    content: note.content,
    important: note.important
  }
  Note.findByIdAndUpdate(id, newNoteInfo, { new: true }).then(result => {
    if (result) {
      response.json(result)
    } else {
      response.status(404).end()
    }
  }).catch(err => {
    next(err)
  })
})

app.post('/api/notes/', (request, response) => {
  const note = request.body

  if (!note.content) {
    return response.status(400).json({
      error: 'Required content.'
    })
  }
  const newNote = new Note({
    content: note.content,
    important: note.important || false,
    date: new Date()
  })

  newNote.save()
    .then(savedNote => {
      response.json(savedNote)
    }).catch(err => {
      console.error(err)
    })
})

app.delete('/api/notes/:id', (request, response, next) => {
  const { id } = request.params
  Note.findByIdAndDelete(id).then(() => {
    response.status(204).end()
  }).catch(error => next(error))
})

app.use(badIndex)

app.use(notFound)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Corriendo server en el puerto: [${PORT}]`)
})
