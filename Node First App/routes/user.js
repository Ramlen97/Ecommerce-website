const express=require('express');
const userController=require('../controllers/user');

const router=express.Router();

router.get('/',userController.getUsers);

router.post('/add-user',userController.postAddUser);

router.post('/delete-user/:userId',userController.postDeleteUser);

router.post('/update-user/:userId',userController.postUpdateUser);

module.exports=router;