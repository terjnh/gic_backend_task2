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


exports.view = function (req, res) {
    console.log("req.params:", req.params)
    // req.params = { location: 'east-coast-park' }
    console.log("req.params.location:", req.params.location)

    Cafe.find(req.params, function (err, result) {
        console.log(result)
        if (err) {
            res.send(err);
        }
        for (const cafeObj of result) {
            if (cafeObj.location === req.params.location) {
                res.json({
                    message: 'Cafe location details loaded',
                    data: cafeObj
                })
            } else {
                res.json({
                    message: 'Cafe location not found',
                    data: []
                })
            }
        }

    })
};