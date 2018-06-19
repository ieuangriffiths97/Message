var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://test:test1234@ds263710.mlab.com:63710/message-api');

//connect to tb
var msgSchema = new mongoose.Schema({
    msgItem: String
});

var Message = mongoose.model('Message', msgSchema);



var urlencodedParser = bodyParser.urlencoded({extended: false});


module.exports = function(app){


app.get('/msg', function(req,res){
    //get data from mongo and pass it to view
    Message.find({}, function(err, data){
        if (err) throw err;
        res.render('msg', {msgs: data});

    });
});

app.post('/msg', urlencodedParser, function(req, res){
    //get data from view and add it to db
    var newMessage = Message(req.body).save(function(err,data){
        if (err) throw err;
        res.json(data);
    })
});

app.delete('/msg/:item', function(req,res){
    Message.find({msgItem: req.params.item.replace(/\-/g, " ")}).remove(function(err,data){
        if (err) throw err;
        res.json(data);
    });
});

};