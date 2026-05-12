const mongoose = require('mongoose')


const todoSchema = new mongoose.Schema({
    title :{
        type : String,
        required : true
    },
    time : {
        type : Date,
        default : Date.now 
    },
    details : {
        type : String 
    },
    completed : {
        type : Boolean,
        default : false 
    }
}, {timestamps : true})

const TodoModel = mongoose.model ('Todo', todoSchema)
module.exports = TodoModel