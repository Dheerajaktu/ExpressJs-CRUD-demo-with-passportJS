'use strict';
// var model = require('../models');
module.exports = (sequelize, DataTypes) => {
    var user = sequelize.define('user', {

        uid: {
            updatedAt: false,
            allowNull: false,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        username: {
            updatedAt: false,
            allowNull: false,
            primaryKey: false,
            type: DataTypes.STRING
        },
        password: {
            updatedAt: false,
            allowNull: true,
            primaryKey: false,
            type: DataTypes.STRING
        }
    },
        {
            timestamps: false
        });

    // user.associate = function (models) {
    //     user.belongsToMany(models.roles, { through: 'user_role', timestamps: false });
    // }
    return user;
};



