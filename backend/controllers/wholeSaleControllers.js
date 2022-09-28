const asyncHandler = require("express-async-handler");
const db = require("../config/db");
const bcrypt = require("bcrypt");
const generateToken = require("../utils/jwtToken");
const collection = require("../config/collection");
const verification = require("../middleware/tiwllioVerification");

//user register controller with otp verification
// const registerWholesalers = asyncHandler(async (req, res) => {
//   req.session.wholeSaler = req.body;
//   const phoneNumber = req.session.wholeSaler.phone;
//   req.session.wholeSaler.valid = false;
//   req.session.wholeSaler.Wallet = 0;
//   // Phone number checking in database
//   const checkPhone = await db
//     .get()
//     .collection(collection.WHOLESALER_COLLECTION)
//     .findOne({ phone: phoneNumber });
//   if (checkPhone) {
//     res.status(400).json({ error: "Phone Number Already Exists" });
//   } else {
//     // no registerd number
//     const code = await verification.sendOtp(req.session.wholeSaler.phone);
//     if (code) {
//       res.status(200).json({ success: true });
//     } else {
//       res.status(401).json({ error: "Invalid Phone number" });
//     }
//   }
// });
// Otp verification function
// const Phoneverification = asyncHandler(async (req, res) => {
//   const Otp = req.params.otp;
//   const wholsalerData = req.session.wholeSaler;
//   const phoneNumber = req.session.wholeSaler.phone;
//   wholsalerData.password = await bcrypt.hash(wholsalerData.password, 10);
//   const code = await verification.CheckOtp(phoneNumber, Otp);
//   // check valid true or false
//   if (code.valid) {
//     const User = await db
//       .get()
//       .collection(collection.WHOLESALER_COLLECTION)
//       .insertOne(wholsalerData);
//     if (User) {
//       //welcome message function
//       const message = await verification
//         .SendMessage(
//           phoneNumber,
//           "welcome to taplone registration is completed wait for admin verification"
//         )
//         .then((resp) => {
//           res.status(200).json(resp);
//         })
//         .catch((err) => {
//           res.status(500).json({ err: "something went wrong..." });   
//         });
//     } else {
//       res.status(500).json({ error: "MongoDB Error" });
//     }
//   } else {
//     res.status(401).json({ err: "Invalide Otp Please verify Otp" });
//   }
// });

//login wholsaler
// const loginwholsaler= asyncHandler(async (req, res) => {
//   const Email = req.body.email;
//   const Password = req.body.password;
//   //check email in database
//   const wholesalerDeatails = await db
//     .get()
//     .collection(collection.WHOLESALER_COLLECTION)
//     .findOne({ email: Email });

//   if (wholesalerDeatails.valid) {
//     if (wholesalerDeatails) {
//       //compate entered password and database password
//       bcrypt.compare(Password, wholesalerDeatails.password).then((status) => {
//         if (status) {
//           const name = wholesalerDeatails.name;
//           const email = wholesalerDeatails.email;
//           const phone = wholesalerDeatails.phone;
//           const wholesaler = true;
//           const token = generateToken(wholesalerDeatails._id);
//           res.status(200).json({
//             name,
//             email,
//             phone,
//             token,
//             wholesaler,
//           });
//         } else {
//           res
//             .status(401)
//             .json({ error: "Invalid password please enter valid password" });
//         }
//       });
//     } else {
//       res.status(401).json({ error: "Invalid Email Address" });
//     }
//   } else {
//     res.status(401).json({ error: "Account is not verified please wait" });
//   }
// });

//otp login function
// const VerifyPhone = asyncHandler(async (req, res) => {
//   const phoneNumber = req.body.phone;
//   const wholsalerDeatails = await db
//     .get()
//     .collection(collection.WHOLESALER_COLLECTION)
//     .findOne({ phone: phoneNumber });
//   if (wholsalerDeatails) {
//     if (wholsalerDeatails.valid) {
//       //send otp function
//       const code = await verification.sendOtp(phoneNumber);
//       if (code) {
//         req.session.wholsalerOtpLogin = wholsalerDeatails;
//         res.status(200).json({ success: "true" });
//       } else {
//         res.status(400).json({ success: "false" });
//       }
//     } else {
//       res.status(401).json({ error: "Account is not verified please wait" });
//     }
//   } else {
//     res.status(401).json({ error: "Invalid Phone Number" });
//   }
// });

// const cheackOtp = asyncHandler(async (req, res) => {
//   const Otp = req.params.otp;
//   const wholesalerDeatails = req.session.wholsalerOtpLogin;
//   //otp check function
//   const code = await verification.CheckOtp(wholesalerDeatails.phone, Otp);
//   if (code.valid) {
//     const name = wholesalerDeatails.name;
//     const email = wholesalerDeatails.email;
//     const phone = wholesalerDeatails.phone;
//     const wholesaler = true;
//     const token = generateToken(wholesalerDeatails._id);
//     res.status(200).json({
//       name,
//       email,
//       phone,
//       token,
//       wholesaler,
//     });
//   } else {
//     res.status(401).json({ error: "Invalid Otp Please verify Otp" });
//   }
// });



// module.exports = { registerWholesalers, Phoneverification,loginwholsaler,cheackOtp,VerifyPhone };
