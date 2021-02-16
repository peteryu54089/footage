'Use strict'

const Sequelize = require('sequelize');
const db = require('../lib/db');

const Admin = db.define('admin', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    }, account: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true
    }, password: {
        type: Sequelize.STRING(20),
        allowNull: false
    }
}, {
    freezeTableName: true,
    underscored: true
});

Admin.sync();

module.exports = Admin;

