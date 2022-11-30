const logger = (request, response, next) => {
  console.log('MÉTODO:   |', request.method)
  console.log('DIRECCIÓN:|', request.path)
  console.log('CUERPO:   |', request.body)
  console.log('IP:       |', request.ip)
  next()
}
module.exports = logger