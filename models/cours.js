const { Schema } = require("mongoose");

//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

const coursSchema = new Schema({
    name: String,
    startDate: Date
})

module.exports = mongoose.model("cours",coursSchema)
