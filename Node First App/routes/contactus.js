const express=require('express');

const router=express.Router();

const contactusController=require('../controllers/contactus');

router.get('/',contactusController.getContactUsForm);

module.exports=router;