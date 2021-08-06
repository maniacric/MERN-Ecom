const express = require("express");
const router = express.Router();

const {getCategoryById,createCategory,getAllCategory,getCategory,updateCategory, removeCategory} = require("../controllers/category")
const {isAdmin,isAuthenticated,isSignedin} = require("../controllers/auth")
const {getUserbyId} = require("../controllers/user");
//const { route } = require("./user");

router.param("userId",getUserbyId);
router.param("categoryId",getCategoryById)


//actual routes goes here



//createroute
router.post("/category/create/:userId",isSignedin,isAuthenticated,isAdmin,createCategory);

//read routes
router.get("/category/:categoryId",getCategory)
router.get("/category",getAllCategory)


//update routes
router.put("/category/:categoryId/:userId",isSignedin,isAuthenticated,isAdmin,updateCategory)

//delete routes
router.delete("/category/:categoryId/:userId",isSignedin,isAuthenticated,isAdmin,removeCategory)

module.exports = router;
