module.exports = function(app){
    app.get('/', function(req, res){
        res.render('index.html');
    });
    app.get('/todolist', function(req, res){
        res.render('todolist.html');
    });
}