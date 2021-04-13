const Product = require("../models/product")
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");
const product = require("../models/product");



exports.getProductbyId = (req,res,next,id)=>{
    Product.findById(id).populate("category").exec((err,product)=>{
        if(err||!product){
            return res.status(400).json({
                error:"product not found"
            })
        }
        req.profile = product;
        next();
    })

}


exports.createProduct = (req,res) =>{

    let form = new formidable.IncomingForm();
    form.keepExtensions = true;

    form.parse(req,(err,fields,file)=>{
        if(err){
            return res.status(400).json({
                error:" problem with image"
            })
        }


        //destructure the fields
        const {name,description ,price,category, stock,} = fields;

        if( !name ||
            !description||
            !price||
            !category||
            !stock){
                return res.status(400).json({
                    error: "please include all fields"
                })
        }

        let product = new Product(fields);
    
        if(file.photo){
            if(file.photo.size > 3000000){
                return res.status(400).json({
                    error:"File size is too big"
                })
            }
            product.photo.data = fs.readFileSync(file.photo.path);
            product.photo.contentType = file.photo.type

        }
        //console.log(product);   
        //save to DB
        product.save((err,product)=>{
            if(err||!product){
                return res.status(400).json({
                    error: " product could not be saved"    
                })
            }
            res.json(product)
        })
       
    })  

}

exports.getProduct = (req,res) =>{

    req.product.photo=undefined;
    return res.json(req.product); 
}

exports.photo  =(req,res,next) =>{
    if(req.product.photo.data){
        res.set("Content-Type",req.product.photo.contentType)
        return res.send(req.product.photo.data);
    }
    next();
}

exports.deleteProduct = (req,res) =>{
    let product = req.product;
    product.remove((err,deletedProduct) =>{
        if(err){
            return res.status(400).json({
                error: "failed to delete the product"
            })
        }
        res.json({
            message : "product deleted successfully"
        })
    })
}

exports.updateProduct = (req,res) =>{
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;

    form.parse(req,(err,fields,file)=>{
        if(err){
            return res.status(400).json({
                error:" problem with image"
            })
        }


        //product update
        let product =req.product;
        product = _.extend(product,fields)


        if(file.photo){
            if(file.photo.size > 3000000){
                return res.status(400).json({
                    error:"File size is too big"
                })
            }
            product.photo.data = fs.readFileSync(file.photo.path);
            product.photo.contentType = file.photo.type

        }
        //console.log(product);   
        //save to DB
        product.save((err,product)=>{
            if(err){
                return res.status(400).json({
                    error: " product could not be updated"    
                })
            }
            res.json(product)
        })
       
    })  

}


exports.getAllProducts = (req,res)=>{
    
    let limit = req.query.limit ? parseInt(req.query.limit): 8;
    let sortBy =req.query.sortBy ? req.query.sortBy : "_id";

    Product.find()
    .select("-photo")
    .populate("category")
    .sort([[sortBy,"asc"]])
    .limit(limit)
    .exex((err,products) =>{
        if(err){
            return res.status(400).json({
                error: "no product found"
            })
        }
        res.json(prouducts);
    })
}


exports.updateStock  = (req,res,next) =>{

    let myoperation = req.body.order.products.map (prod =>{
        return {
            updateOne :{
                filter: {_id : prod._id},
                update:{$inc: {stock: -prod.count,sold:+prod.count}}
            }
        }
    })
    Product.bulkWrite (myoperation, {}, (err,products)=>{
        if(err){
            return res.status(400).json({
                error: "bulk operation failed"
            })
        }
    })

}