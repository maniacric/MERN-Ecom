const express = require("express");
var router = express.Router();
const { body, validationResult } = require('express-validator');
const {signout,signup,signin} = require("../controllers/auth")


router.get("/signout",signout);


router.post("/signup",[
    body("name","minimum 3 words").isLength({min:3}),
    body("email","email is required").isEmail(),
    body("password","minimum 3 character").isLength({min:3})
],signup);


router.post("/signin",[
    body("email","email is required").isEmail(),
    body("password","password is required").isLength({min:3})
],signin);


module.exports = router;