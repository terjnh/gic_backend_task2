// employeeController.js
Employee = require('../models/employeeModel');

// Handle index actions
exports.index = function (req, res) {
    Employee.get(function (err, employees) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Employees retrieved successfully",
            data: employees
        });
    });
};

// Handle create employee actions
exports.new = function (req, res) {
    console.log("req.body:", req.body)
    var employee = new Employee();
    employee.name = req.body.name ? req.body.name : employee.name;
    employee.days_worked = req.body.days_worked;
    employee.cafe = req.body.cafe;
    // employee._id = req.body._id;
    // save the employee and check for errors
    employee.save(function (err) {
        // if (err)
        //     res.json(err);
        res.json({
            message: 'New employee created!',
            data: employee
        });
    });
};


// Handle view employee info
exports.view = function (req, res) {
    Employee.findById(req.params.employee_id, function (err, contact) {
        if (err)
            res.send(err);
        res.json({
            message: 'Employee details loading..',
            data: contact
        });
    });
};