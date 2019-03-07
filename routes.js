var addEmp = require('./apirouting/add-emp');
var editEmp=require('./apirouting/edit-emp');
var delEmp=require('./apirouting/delete-emp');
module.exports = function(router) {
    var addEmp = require('./apirouting/add-emp.js');
    router.get('/', function(req, res) {
      res.json({ message: "API Initialized!"});
    });
    router.post('/editemp', editEmp);
    router.post('/delemp', delEmp);
    router.post('/addemp', addEmp);
  };
