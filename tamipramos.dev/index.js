const express = require('express')
const app = express()

app.post('/post', (request, response) => {
  console.log('Connected to React')
  response.redirect('/')
})

app.get('/', (request, response) => {
  response.sendFile('frontend/public/index.html', { root: __dirname })
})

const PORT = process.env.PORT || 8080

app.listen(PORT, console.log(`Server started on port ${PORT}`))
