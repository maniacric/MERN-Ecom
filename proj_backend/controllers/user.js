const { removeListener } = require("npm");
const User = require("../models/user");

exports.getUserbyId =  (req,res,next,id)=>{
    User.findById(id).exec((err,user)=>{
        if(err||!user){
            return res.status(400).json({
                error:"user was not found"
            });
        }
        req.profile = user;
        next();
    })
} 

exports.getAllUsers = (req,res)=>{
    User.find().exec((err,users)=>{
        if(err||!users){
            return res.status(400).json({
                error: "No user found"
            });
        }
        res.json(users);
    });
};

exports.getUser = (req,res)=>{
    //get back here for password
    req.profile.salt = undefined;
    req.profile.encry_password= undefined;
    return res.json(req.profile);
}


exports.updateUser = (req,res) =>{
    User.findByIdAndUpdate(
        {_id : req.profile.id},
        {$set: req.body},
        {new:true,useFindAndModify:false},
        (err,user)=>{
            if(err){
                res.status(400).json({
                    error:"you are not authorised to update this user"
                })
            }
            user.salt = undefined;
            user.encry_password= undefined
            return res.json(user);
        }
            
    )
}
