var bodyParser = require('body-parser');
var mongoose = require('mongoose');


mongoose.connect('mongodb://test:test1234@ds263710.mlab.com:63710/message-api');

//connect to tb
var msgSchema = new mongoose.Schema({
    msgItem: String
});

var Message = mongoose.model('Message', msgSchema);



var urlencodedParser = bodyParser.urlencoded({ extended: false });


module.exports = function (app) {


    app.get('/msg', function (req, res) {
        //get data from mongo and pass it to view
        Message.find({}, function (err, data) {
            if (err) throw err;
            res.render('msg', { msgs: data });

        });
    });

    app.get('/msg/:msgid', function (req, res) {
        var id = req.params.msgid;
        //get data from mongo and pass it to view
        Message.findById(id, function (err, docs) {
            if (err) throw err;
            console.log(docs + 'has been found')
            //res.send(data + 'has been found')
            res.send(docs);

        });
    });

    app.post('/msg', urlencodedParser, function (req, res) {
        //get data from view and add it to db
        Message(req.body).save(function (err, data) {
            if (err) throw err;
            res.json(data);
        })
    });
    /*
        app.delete('/msg/:id', function (req, res) {
            var id = req.params.id
            Message.findOne({ _id: id }).remove(function (err, data) {
                if (err) throw err;
                res.json(data + "Has been removed");
            });
        });
        */
}