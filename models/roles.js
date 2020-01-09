'use strict';
// var model = require('../models');
module.exports = (sequelize, DataTypes) => {
    var roles = sequelize.define('roles', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            updatedAt: false,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        }
    },
        { timestamps: false });


    roles.associate = function (models) {
        roles.belongsToMany(models.userProfiles, { through: 'user_role', timestamps: false });
    }
    return roles;
}



