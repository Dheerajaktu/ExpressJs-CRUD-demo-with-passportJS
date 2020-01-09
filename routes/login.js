var express = require('express');
var router = express.Router();
// var controller = require('../controller/UserController');
var user = require('../controller/UserController');
const db = require('../config/databaseHelper');


router.get('/login', (req, res, next) => {
    if(req.user){
    return res.render('/login/loginSucess');
    }
   return res.render('/login');
}),

    router.get('/loginSucess', (req, res) => {
        // console.log('=========LOGIN SUCCCESS CALLED=====');
        res.render('loginSucess');
    }),

    router.get('/showData', user.showData);


router.post('/login', user.login);

module.exports = router;


