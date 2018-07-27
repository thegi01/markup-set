var express = require('express');
var app = express();    // the main app
var admin = express();  // the sub app


admin.on('mount', function(parent){
    console.log('Admin Mounted');
    console.log(parent);
});

admin.get('/', function(req, res){
    res.send('Admin Homepage');
});

app.use('/admin', admin);


app.listen(3000, function(){
    console.log('Listening on prot 3000!')
});