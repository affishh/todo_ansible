const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    title:{
        type: String,
        required:true
    },
    completed:{
        type:Boolean,
        default:false
    },
    createdon:{
        type:Date,
        default:Date.now()
    },
    completedAt:{
        type:Date
    }

})
module.exports = mongoose.model('Todo', todoSchema)