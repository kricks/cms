var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    id: {type: String, required: true},
    name: {type: String},
    url: {type: String},
});

module.exports = mongoose.model('Document', schema);