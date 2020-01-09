const db = require('../models');
connectDb = require('../config/databaseHelper');
const models = require('../models');
module.exports = {
    manageDatabase: function () {

        db.sequelize.sync({ alter: true }).then(result => {
            console.log("=============DB CONNECTION DONE========");
            this.createRoles();
            // console.log("create Roles===============AFTER CREATE ROLE=======================");
        }).catch(e => {
            console.log("error", e);
        });
    },
    createRoles: function () {
        let conn = require('../config/databaseHelper');
        var values = ['Admin', 'Manager', 'User', 'Customer'];
        var promisesList = [];
        // console.log('==============VALUES===========');
        values.forEach(t => {
            // console.log('=================LOOP IS HERE==========', t, Object.keys(conn));
            promisesList.push(conn.findOrCreate('roles', { name: t }));
        })
        Promise.all(promisesList).then(result => {
            // console.log("============role updated=====================");
        }).catch(e => {
            // console.log('============================Error during creating role..===============================', e.message);
            console.log(e);
        });
    },

}

