var editEmp = require('../model/edit-emp-update');
module.exports = function handle_database(req,res,pool) {
    return editEmp.updateData(req.body,res);
}