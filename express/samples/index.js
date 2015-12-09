var express = require('express')
var app = express()

app.get('/', function(req, res) {
	res.send('¡Hola, mundo!')
})

app.get('/yo', function(req, res){
	res.send('Yo!')
})

var server = app.listen(3000, function(){
	console.log('server running at http://localhost: ' + server.address().port)
})
