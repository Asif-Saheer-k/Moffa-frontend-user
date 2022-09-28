const express = require("express");
const router = express.Router();
const {LoginAdmin}=require('../controllers/adminControllers');


//Admin login function
router.route("/login").post(LoginAdmin);   
   


         
module.exports = router;