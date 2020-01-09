var express = require('express');
var db = require('../database/connection');
var models = require('../models');
module.exports = {
    registerWithEmp: function (req, res) {
        let firstName = req.body.firstName;
        let lastName = req.body.lastName;
        let username = req.body.username;
        let password = req.body.password;

        console.log('------EMP CONT REGISTERWITHEMP----', firstName, lastName, username, password);
        let query = 'EXEC spRegisterWithEmps_getInsert @firstName=$firstName,@lastName=$lastName,@username=$username,@password=$password'
        models.sequelize.query(query, {
            bind: {
                firstName,
                lastName,
                username,
                password
            },
            type: models.sequelize.QueryTypes.SELECT
        })
        return res.redirect('loginWithEmp');
    },
    loginWithEmp: function (req, res) {
        console.log('-------LOGINWITHEMP CONT CALLED-----------');

        let username = req.body.username;
        let password = req.body.password;
        let query = 'EXEC spRegisterWithEmps_getData @username=$username,@password=$password';
        models.sequelize.query(query, {
            bind: {
                username,
                password
            },
            type: models.sequelize.QueryTypes.SELECT
        }).then(result => {
            // console.log('-----DATA FROM DB ------', result);
            console.log('---------DB RESULT--------', result);
            console.log('usernmae', result[0].username);
            console.log('password', result[0].password);
            if (username == result[0].username && password == result[0].password) {
                return res.redirect('/empLoginSuccess/empLoginSuccess');
            }

        })
    },
    showEmpData: function (req, res) {
        console.log('-------------showEmpdata -----');

        let query = 'EXEC spRegisterWithEmps_getAllData';
        models.sequelize.query(query, {
            type: models.sequelize.QueryTypes.SELECT
        }).then(result => {
            console.log('----------SHOWEMPDATA CALLED-------', result);
            return res.render('showEmpData', { result: result })

        })

    },
    deleteProfile: function (req, res) {
        let id = req.body.id;
        console.log('---DELETEPROFILE CONT CALLED---', req.body.id);
        let query = 'EXEC spRegisterWithEmps_getDelete @id=$id';
        models.sequelize.query(query, {
            bind: {
                id: id
            },
            type: models.sequelize.QueryTypes.DELETE
        }).then(result => {
            console.log('------inside then() -----');
            res.send({ message: 'Row Deleted Successfully' });
        }).catch(err => {
            if (err) {
                console.log('ERROR----', err);

            }
        })
    },
    editProfile: function (req, res) {
        console.log('------------UPDATE PROFILE CONT CALLED------', req.query.id);
        let id = req.query.id;
        let query = 'EXEC spRegisterWithEmps_getDataById @id=$id';
        models.sequelize.query(query, {
            bind: {
                id: id
            },
            type: models.sequelize.QueryTypes.SELECT
        }).then(result => {
            console.log('--------update result-----', result[0]);
            res.render('updateEmpDetails', { result: result[0] });
        }).catch(err => {
            console.log('-------ERROR IN UDPATE CONT-----', err);
        })
    },
    saveProfile: function (req, res) {


        console.log('----------save profile cont called----------', req.body);
        let firstName = req.body.firstName;
        let lastName = req.body.lastName;
        let username = req.body.username;
        let password = req.body.password
        let id = req.body.id;

        let query = 'EXEC spRegisterWithEmps_getUpdate @firstName=$firstName,@lastName=$lastName,@username=$username,@password=$password,@id=$id';
        models.sequelize.query(query, {
            bind: {
                firstName: firstName,
                lastName: lastName,
                username: username,
                password: password,
                id: id
            },
            type: models.sequelize.QueryTypes.UPDATE
        }).then(result => {
            // res.send({ message: 'Details Save Successfully' });

            res.redirect('/showEmpData');
           
        }).catch(err => {
            console.log('----Error In Update Details---', err);
        })




    }

}  