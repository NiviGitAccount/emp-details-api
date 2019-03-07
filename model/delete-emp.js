var deleteData  ={};
var connection = require('../apirouting/db');
deleteData.delData = function(updateData,response){
        var queryString = "delete emp.emp_details where emp_name='"+updateData.data.name+"'";
    connection.query(queryString,(err,result)=>{
        if(!err){
            console.log(response);
            response.setHeader('Access-Control-Allow-Headers','application/json');
            response.setHeader('Access-Control-Allow-Credentials',true);
            response.setHeader('Access-Control-Allow-Origin','*');
            response.send({ "message": "success!"});
        }
    });
}
module.exports = deleteData;