'use strict';
module.exports = (sequelize, DataTypes) => {
    var userProfiles = sequelize.define('userProfiles', {
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
        // role: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        //     updatedAt: false
        // },
    },
        {
            timestamps: false

        })
    userProfiles.associate = function (models) {
        userProfiles.belongsToMany(models.roles, { through: 'user_role', timestamps: false });
    }
    return userProfiles;
};


