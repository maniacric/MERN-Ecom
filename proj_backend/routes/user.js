const express = require("express");
const router = express.Router();
const { getUserbyId, getUser, getAllUsers,updateUser,userPurchaseList }= require("../controllers/user");
const { isSignedin, isAuthenticated, isAdmin }= require("../controllers/auth")


router.param ("userId",getUserbyId);


router.get("/user/:userId",isSignedin,isAuthenticated,getUser);
router.put("/user/:userId",isSignedin,isAuthenticated,updateUser)
router.get("/orders/user/:userId",isSignedin,isAuthenticated,userPurchaseList)


//router.get("/getAllUsers",getAllUsers);



module.exports = router;