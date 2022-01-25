// api-routes.js// Initialize express router
let router = require('express').Router();// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to gic-backend-task-2',
    });
});

var employeeController = require('./controllers/employeeController');
var cafeController = require('./controllers/cafeController');


router.route('/cafe/')
    .get(cafeController.index)
    .post(cafeController.new);
router.route('/cafes/location/:location')
    .get(cafeController.view);
// router.route('/cafes?location=:location')
//     .get(cafeController.view);

router.route('/cafes/employees')
    .get(employeeController.index)
router.route('/cafe/employee')
    .post(employeeController.new);
router.route('/cafe/employees/:name')
    .get(employeeController.view)

module.exports = router;
