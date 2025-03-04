const express= require('express')
const router= express.Router();
const User= require("../controllers/user.js")
const Validator= require('../middlewares/validator.js')
const Certificate= require('../controllers/pdfRedirection.js')
const { loginPostRequestLimiter }= require('../middlewares/RateLimiters.js')




//       Public-Routes

router.get("/v1/token-verification", User.JWTtokenVerification)

router.get("/id-cards/:unique_id", Certificate.handleGetIdCardById)

router.get("/donation/:unique_id", Certificate.handleGetDonationCertificate)

router.get("/certificates/:certificate_id", Certificate.handleGetCertificateById )



router.post("/v1/sign-up", User.handleSendEmailForSignUp)

router.post("/v1/forget-password", User.handleSendEmailForForgetPassword)

router.post("/v1/login", loginPostRequestLimiter, User.handlePostUserLogin)

router.post("/v1/forget-password/otp-submission", User.handlePostForgetPasswordOTP)

router.post("/v1/sign-up/verification", Validator.validateAndSanitizeSignInInfo, User.handlePostSignUpData)



module.exports= router