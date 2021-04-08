const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxlength:32,
        trim:true
    },
    description:{
        type:String,
        required:true,
        maxlength:1024,
    },
    price:{
        type:Number,
        required:true,
        maxlength:32,
        trim:true
    },
    category:{
        type:ObjectId,
        ref: "Category"
    },
    stock:{
        type:Number,

    },
    sold:{
        type:Number,
        default:0
    },
    photo:{
        data:Buffer,
        contentType:String
    }
})


module.exports = mongoose.model("Product",productSchema);