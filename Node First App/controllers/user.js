const User = require('../models/user');
const sequelize = require('../util/database');


exports.getUsers = (req, res, next) => {
    User.findAll()
        .then(result => {
            console.log(result);
            res.json(result);
        })
        .catch(err => console.log(err));
}

exports.postAddUser = (req, res, next) => {
    const username = req.body.username;
    const phoneNumber = req.body.phoneNumber;
    const email = req.body.email;
    User.create({
        username: username,
        phoneNumber: phoneNumber,
        email: email
    })
        .then(result => {
            console.log(result);
            res.json(result);
        })
        .catch(err =>{
            res.status(504).json({error:err});
        });
}

exports.postDeleteUser = (req, res, next) => {
    const userId = req.params.userId;
    console.log(userId);
    User.findByPk(userId)
        .then(user => {
            return user.destroy();
        })
        .then(result => {
            console.log('User is deleted from DB');
            console.log(result.dataValues);
            res.json(result);
        })
        .catch(err => console.log(err));
}

exports.postUpdateUser = (req, res, next) => {
    const userId = req.params.userId;
    console.log(userId);
    User.findByPk(userId)
        .then(user => {
            user.username = req.body.username;
            user.phoneNumber = req.body.phoneNumber;
            user.email = req.body.email;
            return user.save();
        })
        .then(result => {
            console.log('User is updated');
            console.log(result.dataValues);
            res.json(result);
        })
        .catch(err =>{
            res.status(504).json({error:err});
        });
}
