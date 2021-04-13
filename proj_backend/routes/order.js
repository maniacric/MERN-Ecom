const express = require("express");
const router = express.Router();

const { isSignedin, isAuthenticated }= require("../controllers/auth")
const { getUser, getUserbyId, pushOrderinPurchaseList }= require("../controllers/user")
const { getProduct, updateStock }= require("../controllers/product");
const { CreateOrder } = require("../controllers/order");


router.param ("userId",getUserbyId);
router.param ("orderId",getOrderbyId);
router.param("productId",getProductById);




router.post("/order/create/:userId",isSignedin,isAuthenticated,pushOrderinPurchaseList,updateStock,CreateOrder)

module.exports = router;

