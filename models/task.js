const mongoose = require('mongoose');

const task = new mongoose.Schema({
    description: {
        type : String,
        required: true
    },
    type: {
        type : String,
        required: true
    },
    due: {
        type : String,
        required: true
    }    
});

const ToDo = mongoose.model('ToDo', task);

module.exports = ToDo;