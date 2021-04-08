const User =  require("../models/user")
const { body, validationResult } = require('express-validator');
const { errors } = require("formidable");

exports.signup = (req,res) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({
            error: errors.array()[0].msg
        })
    }
    const user = new User(req.body);
    user.save((err,user)=>{
        if(err){
            return res.status(400).json({
                message:"ERROR ,USER COULD NOT BE SAVED IN DB"
            })
        }
        res.json({
            name:user.name,
            email:user.email,
            id:user._id
        });
    })
};


exports.signout = (req,res)=>{
    res.json({
        message:"User Signout"      
    });
};  


