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

router.route('/cafe/employees')
    .get(employeeController.index)
    .post(employeeController.new);
router.route('/cafe/employees/:employee_id')
    .get(employeeController.view)

module.exports = router;


// Import contact controller
// var contactController = require('./contactController');// Contact routes
// router.route('/contacts')
//     .get(contactController.index)
//     .post(contactController.new); router.route('/contacts/:contact_id')
//         .get(contactController.view)
//         .patch(contactController.update)
//         .put(contactController.update)
//         .delete(contactController.delete);// Export API routes
// module.exports = router;