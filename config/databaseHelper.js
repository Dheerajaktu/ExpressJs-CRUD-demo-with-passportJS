const models = require('../models');
const db = require('../database/connection');

module.exports = {
    create: function (tableName, data) {
        // console.log('=============CREATE QUERY CALLED===================');

        return models[tableName].create(data)
    },

    showData: function (tableName) {
        // console.log('=============FIND ALL QUERY CALLED===================');
        return models[tableName].findAll()
    },
    findOne: function (tableName, data) {
        // console.log('==========findOne()========')
        return models[tableName].findOne({ where: data });
    },
    findOrCreate: function (tableName, data) {

        return models[tableName].findOrCreate({ where: data, data });
    }
}