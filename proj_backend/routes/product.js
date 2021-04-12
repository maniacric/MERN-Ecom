const express = require("express");
const router = express.Router();

const {isSignedin,isAuthenticated,isAdmin} = require("../controllers/auth");
const {getProductbyId,createProduct} = require("../controllers/product");
const {getUserbyId} = require("../controllers/user");

//param
router.param("userId",getUserbyId);
router.param("productId",getProductbyId);


//All actual route
router.post("/product/create/:userId",isSignedin,isAuthenticated,isAdmin,createProduct)



module.exports = router;