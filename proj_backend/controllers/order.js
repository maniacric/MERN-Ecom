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

exports.getAllOrder = (req,res) =>{
    Order.find().populate("user","name _id").exec((err,order)=>{
        if(err){
            return res.status(400).json({
                error: "no order found"
            })
        }
        res.json(order);
    })
}

exports.updateStatus = (req,res) =>{
    res.json(Order.schema.path("status").enumValues);
}

exports.getOrderStatus = (req,res) =>{
    Order.update(
        {_id:req.body.orderId},
        {$set : {status: req.body.status}},
        (err,order) =>{
            if(err){
                return res.status(400).json({
                    error: "cannot update order status"
            });
        }
        res.json(order);
        }
    )
}