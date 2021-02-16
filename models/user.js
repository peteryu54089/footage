'Use strict'

const Sequelize = require('sequelize');
const db = require('../lib/db');

const User = db.define('user', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
        primaryKey: true
    }, name: {
        type: Sequelize.STRING(20),
        allowNull: false
    }, account: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true
    }, password: {
        type: Sequelize.STRING(20),
        allowNull: false
    }, email: {
        type: Sequelize.STRING(50),
        allowNull: false
    }, phone: {
        type: Sequelize.STRING(20),
        allowNull: false
    }, sex: {
        type: Sequelize.STRING(10),
        allowNull: false
    }
}, {
    freezeTableName: true,
    underscored: true
});

User.associate = models => {
    User.hasMany(models.order);
};

User.sync();

module.exports = User;

