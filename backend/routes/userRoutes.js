//user routes only
const express = require("express");
const { viewAllProducts, ViewBottomBanner} = require("../controllers/superAdminControllers");
const router = express.Router();
const {
  registerUser,
  Phoneverification,
  loginUser,
  VerifyPhone,
  cheackOtp,
  addToCart,
  getCartProduct,
  removeProductCart,
  getCartCount,
  PaytmIntegration,
  Callbackfunction,
  getTodayDeals,
  removeYesterDayDeal,
  removePreviousDeals,
  edituserProfile,
  TakeUserDeatails,
  changePassword,
  ResetOtpSend,
  DeleteuserAddress,
  getMyOrders
  
} = require("../controllers/userControllers");
const {verifyToken}=require("../middleware/tokenVerification")

//login routes using email,pssword
router.route("/login").post(loginUser);
// user registration routes using email,password,name,phonenumber
router.route("/register").post(registerUser);
//resent otp function
router.route("/resent-otp").get(ResetOtpSend)
//after registration otp verification routes;
router.route("/register/:otp").post(Phoneverification);
//user otp login routes using phone number;
router.route("/otpLogin").post(VerifyPhone);
// verifying otp routes;
router.route("/otpLogin/:otp").post(cheackOtp);
//add to cart routes 
router.route('/addToCart').post(addToCart);
//view all products
router.route("/view-all-products").get(viewAllProducts)
//getCartProducts
router.route('/getCartProducts/:id').get(getCartProduct);
//remove Product from cart
router.route('/removeCartProduct').post(removeProductCart);
//get Cart Count
router.route('/getCartCount').post(getCartCount)
//user Profile deatails routes
router.route('/user-deatails-get').post(TakeUserDeatails)
//pytm integration routes 
router.route('/payment-methode/paytm').post(verifyToken,PaytmIntegration)
//view today deals
router.route('/today-deal-of-the-day').get(getTodayDeals)
//automatic delete yesterday deal
router.route('/remove-deal-of-the-day').delete(removeYesterDayDeal)
//callback function for payment
router.route('/callback').post(Callbackfunction)
//remove previous deal of the day offers
router.route('/cheack-today-date-remove-deal').delete(removePreviousDeals)
//user profile edit routed
router.route('/edit-user-deatails').post(verifyToken,edituserProfile)
//change password routes
router.route('/edit-user-password').put(verifyToken,changePassword) 
//view bottom banner function
router.route("/view-all-bottom-banner").get(ViewBottomBanner)
//delete user addres
router.route("/delete-user-addres").post(verifyToken,DeleteuserAddress)
//get my order routes function
router.route("/get-my-orders/:id").get(getMyOrders)

   





module.exports = router;
