const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const user_Schema = new Schema ({
    username : String 
});

const user = mongoose.model('User',user_Schema);

module.exports =user ;