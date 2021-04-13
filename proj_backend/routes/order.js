const express = require("express");
const router = express.Router();

const { isSignedin, isAuthenticated, isAdmin }= require("../controllers/auth")
const { getUser, getUserbyId, pushOrderinPurchaseList }= require("../controllers/user")
const { getProduct, updateStock,updateStatus ,getOrderStatus}= require("../controllers/product");
const { CreateOrder, getAllOrder } = require("../controllers/order");


router.param ("userId",getUserbyId);
router.param ("orderId",getOrderbyId);
router.param("productId",getProductById);



//create Order
router.post("/order/create/:userId",isSignedin,isAuthenticated,pushOrderinPurchaseList,updateStock,CreateOrder)

//All order list
router.post("/order/getAllorders/:userId",isSignedin,isAuthenticated,isAdmin,getAllOrder)


//status of Order 
router.get("/order/status/:userId",isSignedin,isAuthenticated,getOrderStatus)
router.put("/order/:orderId/status/:userId",isSignedin,isAuthenticated,isAdmin,updateStatus)


module.exports = router;

