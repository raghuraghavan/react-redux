var express = require('express')
var app = express()
var path = require('path')

// MIDDLEWARE TO DEFINE FOLDER FOR STATIC FILES
app.use(express.static('public'))

app.get('/', function(req, res){
    res.sendFile(path.resolve(__dirname,'public','index.html'))
})

app.listen(8080, function(){
    console.log('Application running on port 8080')
})