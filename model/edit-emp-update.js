var empUpdate  ={};
var connection = require('../apirouting/db');
empUpdate.updateData = function(updateData,response){
        var queryString = "update emp.emp_details set emp_dob='"+updateData.data.dob+"',emp_sal='"+
    updateData.data.salary+"')";
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
module.exports = empUpdate;