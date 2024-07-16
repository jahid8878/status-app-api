const mongoose = require('mongoose');

const statusSchema = mongoose.Schema({
    id:{
        type: String,
        require: true
    },
    content:{
       type: String,
       require: true
    },
    liked:{
        type: Number,
        require: true
     },
    createdDate:{
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('allStatus', statusSchema);