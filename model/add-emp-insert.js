var empInsert  ={};
var connection = require('../apirouting/db');
empInsert.insertData = function(insertData,response){
    var queryString = "insert into emp.emp_details ('emp_name', 'emp_dob', 'emp_sal')  values('"+
    insertData.data.name+"','"+insertData.data.dob+"','"+
    insertData.data.salary+"')";
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
module.exports = empInsert;