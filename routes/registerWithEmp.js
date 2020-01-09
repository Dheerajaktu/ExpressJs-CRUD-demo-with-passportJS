var express = require('express');
var router = express.Router();
var empController = require('../controller/empController');

router.get('/regsiterWithEmp', function (req, res) {
    res.render('registerWithEmp.dot');
});
router.get('/loginWithEmp', function (req, res) {
    console.log('------I AM CALLING0-----');
    
    res.render('loginWithEmp.dot');
});

router.post('/registerWithEmp', empController.registerWithEmp);

module.exports = router;