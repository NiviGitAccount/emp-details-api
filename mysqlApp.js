var express   =    require("express");
var bodyParser = require("body-parser");
var app       =    express();
var port     =     3000;
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); 
app.listen(port, function(){
  console.log('Server is running on port:', port);
})
require('./routes.js')(app);
