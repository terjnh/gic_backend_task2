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