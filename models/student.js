//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

const studentSchema = new Schema({
    firstName: String,
    lastName: String
})

var studentModel = mongoose.model('studentModel','studentSchema')
