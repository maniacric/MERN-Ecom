const express = require("express");
const router = express.Router();
const { getUserbyId, getUser, getAllUsers,updateUser,userPurchaseList }= require("../controllers/user");
const { isSignedin, isAuthenticated, isAdmin }= require("../controllers/auth")


router.param ("userId",getUserbyId);


router.get("/user/:userId",isSignedin,isAuthenticated,getUser);
router.put("/user/:userId",isSignedin,isAuthenticated,updateUser)
router.get("/getAllUsers",getAllUsers);
//router.get("/order/user/:userId",isSignedin,isAuthenticated,userPurchaseList)



module.exports = router;