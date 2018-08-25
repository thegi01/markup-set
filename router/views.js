module.exports = function(app){
    app.get('/', function(req, res){
        res.render('index', {user:'pullip'});
    });
    app.get('/about', function(req, res){
        res.render('about', {title:'About'});
    });

    // markup
    app.get('/todolist', function(req, res){
        res.render('todolist');
    });
}