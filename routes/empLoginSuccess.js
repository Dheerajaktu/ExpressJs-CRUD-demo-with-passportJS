var express = require('express');
var router = express.Router();
var empController = require('../controller/empController');
var model = require('../models/index');

router.get('/empLoginSuccess', function (req, res) {
    res.render('empLoginSuccess');
});

// router.get('/showEmpData', function (req, res) {
//     let query = 'EXEC spRegisterWithEmps_getAllData';
//     model.sequelize.query(query).then(result => {
//         console.log('-----------DATA FROM DB ON CLICK------', result);
//         res.render('showEmpData', { result: result });

//     })
//     res.render('showEmpData', { result: result });
// });


// router.get('/showEmpData', empController.showEmpData);


module.exports = router;