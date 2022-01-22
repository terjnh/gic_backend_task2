var mongoose = require('mongoose');

var employeeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    days_worked: {
        type: Number,
        required: true
    },
    cafe: {
        type: String,
        required: true
    }
});

// Export Employee model
var Employee = module.exports = mongoose.model('employee', employeeSchema);
module.exports.get = function (callback, limit) {
    Employee.find(callback).limit(limit);
}