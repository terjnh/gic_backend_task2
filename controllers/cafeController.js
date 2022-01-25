Cafe = require('../models/cafeModel');

// Handle index actions
exports.index = function (req, res) {
    Cafe.get(function (err, cafes) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Cafes retrieved successfully",
            data: cafes
        });
    });
};

// Handle create cafe actions
exports.new = function (req, res) {
    var cafe = new Cafe();
    cafe.name = req.body.name ? req.body.name : cafe.name;
    cafe.description = req.body.description;
    cafe.employees = req.body.employees;
    cafe.logo = req.body.logo;
    cafe.location = req.body.location;

    // save the cafe and check for errors
    cafe.save(function (err) {
        // if (err)
        //     res.json(err);
        res.json({
            message: 'New cafe created!',
            data: cafe
        });
    });
}