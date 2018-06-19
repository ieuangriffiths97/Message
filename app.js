var express = require('express');
var msgController = require('./controllers/msgController');

var app = express();

//set up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//fire controller
msgController(app);
//listen to port
app.listen(8000);
console.log('listening to port 8000');