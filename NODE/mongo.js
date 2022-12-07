const mongoose = require('mongoose')
const connectionString = process.env.MONGO_DB_URI

// Conexion a mongoDB
mongoose.connect(connectionString)
  .then(() => {
    console.log('Conectado a la base de datos.')
  }).catch(err => {
    console.error(err)
  })

/*
const note = Note({
  content: 'Primera nota',
  date: new Date(),
  important: true
})

note.save()
  .then(result => {
    console.log(result)
    mongoose.connection.close()
  }).catch(err => {
    console.error(err)
  })
*/
