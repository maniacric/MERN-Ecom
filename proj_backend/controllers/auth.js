const User =  require("../models/user")
const { body, validationResult } = require('express-validator');
const { errors } = require("formidable");
const user = require("../models/user");
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');



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


exports.signin = (req,res)=>{
    const {email,password} = req.body;
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({
            error: errors.array()[0].msg
        })
    }
    User.findOne({email},(err,user)=>{
        if(err||!user){
            return res.status(400).json({
                error: "user email doesnot exists"
            })
        }
        if(!user.authenticate(password)){
            return res.status(401).json({
                error: "email and password donot match"
            })
        }
        //create a token
        const token  = jwt.sign({_id:user._id},process.env.SECRET);
        
        //put token in cookie
        res.cookie("token",token,{expire: new Date()+999});
    
        //send response to frontend
        const {email,_id,role,name} =user;
        return res.json({token,user:{_id,name,email,role}})
    })

}



exports.signout = (req,res)=>{
    res.json({
        message:"User Signout"      
    });
};  


