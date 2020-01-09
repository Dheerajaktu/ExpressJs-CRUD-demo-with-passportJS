var express = require('express');
var router = express.Router();
var user = require('../controller/UserController');
var empController = require('../controller/empController');
var dbModel = require('../models');

/* GET home page. */
router.get('/', function (req, res) {
  dbModel.roles.findAll().then(result => {
    res.render('home.dot', { result: result });
  })

});
router.get('/registerWithEmp', function (req, res) {
  console.log('---regiterWithEmp router called-----');
  res.render('registerWithEmp.dot');
});

router.get('/login', function (req, res) {
  res.render('login');
});
// router.get('/loginWithEmp', function (req, res) {
//   res.render('loginWithEmp.dot');
// });

router.post('/register', user.register);
router.post('/login', user.login);
// router.post('/registerWithEmp', empController.registerWithEmp);

module.exports = router;
