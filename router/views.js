module.exports = function(app){
    app.get('/', function(req, res){
        res.render('index.html');
    });
    app.get('/about', function(req, res){
        res.render('about.html');
    });

    // markup
    app.get('/todolist', function(req, res){
        res.render('todolist.html');
    });
}