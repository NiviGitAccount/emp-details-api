var list  ={};
var connection = require('../apirouting/db');
list.listData = function(updateData,response){
        var queryString = "select * from emp.emp_details";
    connection.query(queryString,(err,result)=>{
        if(!err){
            console.log(response);
            response.setHeader('Access-Control-Allow-Headers','application/json');
            response.setHeader('Access-Control-Allow-Credentials',true);
            response.setHeader('Access-Control-Allow-Origin','*');
            response.send({ "message": "success!","data":JSON.parse(JSON.stringify(result))});
        }
    });
}
module.exports = list;