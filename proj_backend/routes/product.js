const express = require("express");
const router = express.Router();

const {isSignedin,isAuthenticated,isAdmin} = require("../controllers/auth");
const {getProductbyId,createProduct,getProduct, photo,deleteProduct,updateProduct,getAllProducts} = require("../controllers/product");
const {getUserbyId} = require("../controllers/user");

//param
router.param("userId",getUserbyId);
router.param("productId",getProductbyId);


//All actual route

//post route
router.post("/product/create/:userId",isSignedin,isAuthenticated,isAdmin,createProduct)

//read route
router.get("/product/:productId",getProduct);
router.get("/product/photo/:productId",photo);


//delete route
router.delete("/product/:productId/:userId",isSignedin,isAuthenticated,isAdmin,deleteProduct)

//update route
router.put("/product/:productId/:userId",isSignedin,isAuthenticated,isAdmin,updateProduct)

//home 
router.get("/products",getAllProducts)

module.exports = router;