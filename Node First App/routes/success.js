const express=require('express');

const router=express.Router();

const contactusController=require('../controllers/success');

router.post('/',contactusController.postSucces);

module.exports=router;