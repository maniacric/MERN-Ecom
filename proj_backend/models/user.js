const mongoose = require("mongoose");
const crypto = require("crypto");
import { v4 as uuidv4 } from 'uuid';

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

    },
    {timestamp:true}

)

userSchema.virtual("password")
    .set(function(password){
        this._password= password
        this.salt = uuidv4();
        this.encry_password= this.securepassword(password);
    })
    .get(function(){
        return this._password;
    })


userSchema.method = {

    authenticate : function(plainpassword){
        return this.securepassword(plainpassword) === this.encry_password

    },
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