const { removeListener } = require("npm");
const User = require("../models/user");
const Order = require("../models/order")

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


exports.userPurchaseList= (req,res)=>{
    Order.find({user :req.profile._id})
    .populate("user","_id name")
    .exec((err,order)=>{
        if(err){
            return res.status(400).json({
                error: "no order in this account"
            })
        }
        return res.json(order);
    })
}

exports.pushOrderinPurchaseList = (req,res,next)=>{
     
    let purchases = [];
    req.body.order.products.forEach(product => {
        purchases.push({
            _id:product._id,
            name:product.name,
            description:product.description,
            category: product.category,
            quantity: product.quantity,
            transaction_id : req.body.order.transaction_id
        })
    })

    //save in DB
    User.findByIdAndUpdate(
        {_id:req.profile._id},
        {$push:{purchases:purchases}},
        {new:true},
        (err,purchases)=>{
            if(err){
                return res.status(400).json({
                    error:"unable to save purchase list"
                })
            }
            next();
        })
}