var mongoose = require('mongoose');

var cafeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    employees: {
        type: Number
    },
    logo: {
        type: String
    },
    location: {
        type: String
    }
});

// Export Cafe model
var Cafe = module.exports = mongoose.model('cafe', cafeSchema);
module.exports.get = function (callback, limit) {
    Cafe.find(callback).limit(limit);
}