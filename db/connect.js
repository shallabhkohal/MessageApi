const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://vagimo4398:vXTLURkA8LMLlE0h@simran.893bxhd.mongodb.net/?retryWrites=true&w=majority&appName=simran",{

}).then(()=>{
    console.log("database is connected successfully")
}).catch(()=>{
    console.log("error is generated")
})
//vXTLURkA8LMLlE0h
//mongodb+srv://vagimo4398:<password>@simran.893bxhd.mongodb.net/?retryWrites=true&w=majority&appName=simran