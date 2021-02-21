'Use strict'

const Sequelize = require('sequelize');
const db = require('../lib/db');

const Reset = db.define('reset', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
        primaryKey: true
    }, member_id: {
        type: Sequelize.UUID,
        allowNull: false,
    }, token: {
        type: Sequelize.STRING(20),
        allowNull: false
    }, expired_time: {
        type: Sequelize.DATE,
        allowNull: false
    }
}, {
    freezeTableName: true,
    underscored: true
});

Reset.sync();

module.exports = Reset;

