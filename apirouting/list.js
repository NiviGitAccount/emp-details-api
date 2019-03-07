var listEmp = require('../model/list-emp');
module.exports = function handle_database(req,res,pool) {
    return listEmp.listData(req.body,res);
}