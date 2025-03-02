const express= require('express')
const router= express.Router();
const path= require('path')
const multer= require('multer')
const Admin= require("../controllers/admin.js")
const PdfGenerator= require('../controllers/pdfGenerators.js')
const { CalculateSalary }= require('../middlewares/SalaryCalculation.js')
const { checkRequiredFields }= require('../middlewares/validator.js')
const InputValidationID= require('../middlewares/IdCardDataValidation.js')
const InputValidationOL= require('../middlewares/OfferLetterDataValidation.js')
const { validateImageUpload }= require('../middlewares/InputFileValidation.js')


const upload= multer({ dest: path.join(__dirname, '..', 'uploads/') })



router.get("/home", Admin.handleGetAdminHomePage)

router.get("/get-profile", Admin.handleGetProfileInfo)

router.get("/logout", Admin.handleAdminLogout)



router.post("/profile", upload.single('image'), Admin.handleAdminProfile)

router.post("/update-pass", Admin.handleAdminPasswordChange)

router.post("/generate/v1/certificate", PdfGenerator.handlePostCertificateGeneration)

router.post("/generate/v1/offer-letter", InputValidationOL, CalculateSalary, PdfGenerator.handlePostOfferLetterGeneration)

router.post("/generate/v1/id-card", upload.single('IMAGE'), InputValidationID, validateImageUpload, PdfGenerator.handlePostIdCardGenerator)








module.exports= router