const mongoose = require("mongoose");
const crypto = require("crypto");

var userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxlength:32,
        trim:true
    },

    lastname:{
        type:String,
        required:false,
        maxlength:32,
        trim:true
    },

    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },

    //To-Do
    encry_password:{
        type:String,
        required:true
    },

    salt: String,

    role:{
        type:Number,
        default:0
    },

    purchases:{
        type:Array,
        default:[]
    }

})


userSchema.method = {
    securepassword : function (plainpassword){
        if(!plainpassword)
            return "";  
        try{
            return crypto.createHmac('sha256', secret)
            .update('plainpassword')
            .digest('hex');
        } 
        catch(err){
            return ""
        }
    }
}

module.exports = mongoose.model("User",userSchema);