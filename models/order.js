'Use strict'

const Sequelize = require('sequelize');
const db = require('../lib/db');

const Order = db.define('order', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
        primaryKey: true
    }, member_id: {
        type: Sequelize.UUID,
        allowNull: true,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
        references: {
            model: 'member',
            key: 'id',
            as: 'member_id'
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
    }, memebr_name: {
        type: Sequelize.STRING(20),
        allowNull: false
    }, product_name: {
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
    Order.belongsTo(models.member, {
        foreignKey: {
            name: 'member_id',
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

