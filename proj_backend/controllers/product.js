const Product = require("../models/product")
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");



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