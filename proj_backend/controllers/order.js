const {Order,ProductCart} = require("../models/order");

exports.getOrderById = (req,res,next,id) =>{
    Order.findById(id)
    .populate("products.product" ,"name price")
    .exec((err,order) =>{
        if(err){
            return res.status(400).json({
                error: "order not found in DB" 
            })
        }
        req.order =order;
        next();
    })
}

exports.CreateOrder = (req,res) =>{
    req.body.order.user = req.profile;
    const order = new Order (req.body.order);
    order.save((err,order) =>{
        if(err){
            return res.status(400).json({
                error:"order could not be saved"
            })
        }
        res.json(order);
    })
}