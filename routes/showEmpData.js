var express = require('express');
var router = express.Router();
var empController = require('../controller/empController');
var model = require('../models/index');



router.get('/', empController.showEmpData);
router.get('/showEmpData', function (req, res) {
    res.render('showEmpData')
})

router.post('/deleteProfile', empController.deleteProfile);

router.get('/updateProfile', empController.editProfile);

router.post('/saveProfile', empController.saveProfile);

module.exports = router;
