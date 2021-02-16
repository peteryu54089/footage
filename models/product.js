'Use strict'

const Sequelize = require('sequelize');
const db = require('../lib/db');

const Product = db.define('product', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
        primaryKey: true
    }, name: {
        type: Sequelize.STRING(20),
        allowNull: false
    }, price: {
        type: Sequelize.REAL,
        allowNull: false
    }, currency: {
        type: Sequelize.STRING(10),
        allowNull: false
    }, unit_time: {
        type: Sequelize.REAL,
        allowNull: false
    }, unit: {
        type: Sequelize.STRING(10),
        allowNull: false
    }
}, {
    freezeTableName: true,
    underscored: true
});

Product.associate = models => {
    Product.hasMany(models.close);
    Product.hasMany(models.order);
};

Product.sync();

module.exports = Product;

