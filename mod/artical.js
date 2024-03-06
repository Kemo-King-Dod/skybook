const mongoose= require('mongoose');

mongoose.connect('mongodb://localhost:27017',
console.log("db is connected"));

const articalScm= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
})

const articals= mongoose.model('articals',articalScm,"skybook");

module.exports=articals;