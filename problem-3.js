const express = require('express')

const app = express()

app.get('/home', function(req, res) {

res.end('Hello World !')

})

app.listen (3000,process.argv[2])