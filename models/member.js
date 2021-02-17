'Use strict'

const Sequelize = require('sequelize');
const db = require('../lib/db');

const Member = db.define('member', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
        primaryKey: true
    }, name: {
        type: Sequelize.STRING(20),
        allowNull: false
    }, password: {
        type: Sequelize.STRING(20),
        allowNull: false
    }, email: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true
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

Member.associate = models => {
    Member.hasMany(models.order);
};

Member.sync();

module.exports = Member;

