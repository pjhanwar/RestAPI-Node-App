var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    username: String,
    displayname: String,
    department: String,
});

module.exports = mongoose.model('User', UserSchema);