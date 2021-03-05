var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('<b>My</b> first express http server');
});

app.get('/hello', function (req, res){
   res.send('<b>Hello Amogh</b>')
});

app.get('/hi/:name', function (req, res){
   const name = req.params.name;
   res.send("Hey " + name);
});

app.get('/sayName', function (req, res){
   const name = process.env.myName;
   res.send("Your name is - " + name);
});

app.listen(2000, function (){
    console.log('Express Server listening at port 2000...')
});