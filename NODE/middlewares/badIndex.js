module.exports = (error, request, response, next) => {
  console.error(error)
  console.log(error.name)
  if (error.name === 'CastError') {
    response.status(400).send({error: 'ID format error'})
  } else {
    response.status(500).send({error: 'Service not working'})
  }
}
