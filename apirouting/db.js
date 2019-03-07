var express   =    require("express");
var mysql     =    require('mysql');
var app       =    express();

var settings = {
  host     : 'localhost',
  user     : 'root',
  password : 'Apachertr180',
  database : 'emp',
  debug    :  false,
  multipleStatements: true
}
function connectDatabase() {
  var connection;
  if (!connection) {
    connection = mysql.createConnection(settings);
    connection.connect(function(err){
          if(!err) {
              console.log('Database is connected!!');
          } else {
              console.log('Error connecting database!',err);
          }
      });
  }
  return connection;
}
module.exports = connectDatabase();