const Category = require("../models/category")

exports.getCategoryById= (req,res,next,id) =>{
    Category.findById(id).exec((err,cate)=>{
        if(err){
            return res.status(400).json({
                error:"category not found" 
            })
        
        }
        req.category = cate;
        next()
    })
}


exports.createCategory = (req,res)=>{
    const category = new Category(req.body);
    category.save((err,category) =>{
        if(err || !category){
            return res.status(400).json({
                error:"not able to create category in DB" 
            })
        
        }
        res.json({ category });
    })
}


exports.getCategory = (req,res)=>{
    return res.profile(req.category)
}

exports.getAllCategory = (req,res)=>{
    Category.find().exec((err,categoies)=>{
        if(err){
            return res.status(400).json({
                error:"no category found in DB"
            })
        }
        res.json(categories);
    })
}


exports.updateCategory = (req,res)=>{
    const category =req.category;
    category.name = req.body.name;
    category.update((err,updatedCategory)=>{
        if(err){
            return res.status(400).json({
                error:"failed to update category in DB"
            })
        }
        res.json(updatedCategory);
    })
}

exports.removeCategory = (req,res)=>{
    const category = req.category;

    category.remove((err,category)=>{
        if(err){
            return res.status(400).json({
                error:"failed to delete category in DB"
            })
        }
        res.json({
            message:"successfully deleted"
        });
    })
}