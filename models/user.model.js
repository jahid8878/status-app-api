const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    id:{
        type: String,
        require: true
    },
    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
     },
    password:{
        type: String,
        require: true
    },
    age:{
        type: String,
        require: true
    },
    gender:{
        type: String,
        require: true
    },
    address:{
        type: String,
        require: true
    },
    createdDate:{
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('userInfo', userSchema)