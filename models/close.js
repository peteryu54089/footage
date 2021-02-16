'Use strict'

const Sequelize = require('sequelize');
const db = require('../lib/db');

const Close = db.define('close', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
        primaryKey: true
    }, product_id: {
        type: Sequelize.UUID,
        allowNull: false,
        onDelete: 'CASCADE',
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
    }
}, {
    freezeTableName: true,
    underscored: true
});

Close.associate = models => {
    Close.belongsTo(models.product, {
        foreignKey: {
            name: 'product_id',
            allowNull: false
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    });
};

Close.sync();

module.exports = Close;

