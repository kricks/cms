var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    maxDocumentId: {type: String},
    maxMessageId: {type: String},
    maxContactsId: {type: String},
    maxContactId: {type: String}
});

module.exports = mongoose.model('Message', schema);