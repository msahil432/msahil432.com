var compression = require('compression')
var express = require('express')
var app = express()
const path = require('path')
const http = require('http')

app.use(compression())

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/dist'))

app.get('*', function(request, response) {
  response.sendFile(path.join(__dirname, 'dist/index.html'))
})

const server = http.createServer(app)
server.listen(app.get('port'), function() {
  console.log("App is running at localhost:" + app.get('port'))
})