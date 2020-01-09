'use strict';
module.exports = (sequelize, DataTypes) => {
    var registerWithEmp = sequelize.define('registerWithEmp', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true

        },

        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            updatedAt: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            updatedAt: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            updatedAt: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            updatedAt: false
        }
    },
        {
            timestamps: false

        })

    return registerWithEmp;
};


