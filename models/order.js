'Use strict'

const Sequelize = require('sequelize');
const db = require('../lib/db');

const Order = db.define('order', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
        primaryKey: true
    }, user_id: {
        type: Sequelize.UUID,
        allowNull: true,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
        references: {
            model: 'user',
            key: 'id',
            as: 'user_id'
        }
    }, product_id: {
        type: Sequelize.UUID,
        allowNull: true,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
        references: {
            model: 'product',
            key: 'id',
            as: 'product_id'
        }
    }, begin_time: {
        type: Sequelize.DATE,
        allowNull: false
    }, end_time: {
        type: Sequelize.DATE,
        allowNull: false
    }, price: {
        type: Sequelize.REAL,
        allowNull: false
    }, currency: {
        type: Sequelize.STRING(10),
        allowNull: false
    }
}, {
    freezeTableName: true,
    underscored: true
});

Order.associate = models => {
    Order.belongsTo(models.user, {
        foreignKey: {
            name: 'user_id',
            allowNull: true
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
    });
    Order.belongsTo(models.product, {
        foreignKey: {
            name: 'product_id',
            allowNull: true
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
    });
};

Order.sync();

module.exports = Order;

