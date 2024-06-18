
const mongoose = require("mongoose");


const Schema =  new mongoose.Schema({
    content:{
        type:String,
        required:true,
        trim:true,
    },
    mediaUrl:{
    type:String,
    },
    timestamp:{
     type:Date,
     default:Date.now
    },
    seen:{
        type:Boolean,
        default:false

    }
})

const messageSchema = new mongoose.model("User",Schema)

module.exports = messageSchema