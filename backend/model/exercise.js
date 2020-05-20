const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema =new Schema({
    username: String ,
    description: String
})


module.exports =mongoose.model('Exercise',exerciseSchema);