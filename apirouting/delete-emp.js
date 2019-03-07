var delEmp = require('../model/delete-emp');
module.exports = function handle_database(req,res,pool) {
    return delEmp.delData(req.body,res);
}