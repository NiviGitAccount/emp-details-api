var addEmpInsert = require('../model/add-emp-insert');
module.exports = function handle_database(req,res,pool) {
    return addEmpInsert.insertData(req.body,res);
}