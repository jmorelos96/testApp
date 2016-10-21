var express = require('express');
var router = express.Router();
var http = require('http').Server(router);
var io = require('socket.io')(http);
var path = require('path');

//Star wars quotes
var names = require('starwarsquotes');
var allNames = names.all;
var randomName = names.random();
var threeRandomNames = names.random(3);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Jonathan Morelos' });
});

//Get arrays starwarsquotes
router.get('/swquotes', function(req, res){
  res.send(JSON.stringify(randomName));
});

router.get('/g',function(req,res){
  res.render('g');
});

router.get('/chat',function(req, res){
  res.sendFile(path.join(__dirname + '/../views/chat.html'));



});


io.on('connection', function(socket){
  console.log('a user connected');
});
module.exports = router;
