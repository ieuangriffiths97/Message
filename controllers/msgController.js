module.exports = function(app){

    var data = [{msgItem: 'item 1'}, {msgItem: 'item2'}, {msgItem: 'item3'}];

app.get('/msg', function(req,res){
    res.render('msg', {msgs: data});
});

app.post('/msg', function(req, res){

});

app.delete('/msg', function(req,res){

});

};