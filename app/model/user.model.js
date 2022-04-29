const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    first_name: String,
    last_anem: String, 
    gender: String, 
    email:{type: String, required: true}

})
const User = mongoose.model('User', UserSchema);
module.exports = User;