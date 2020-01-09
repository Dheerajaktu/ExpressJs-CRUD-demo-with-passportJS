var express = require('express');
var router = express.Router();
var empController = require('../controller/empController');


router.get('loginWithEmp', function (req, res) {
    console.log('------LOGINWITH EMP ROUTER CALLED------');
    res.render('loginWithEmp.dot');
});



 router.post('/loginWithEmp', empController.loginWithEmp);

module.exports = router;