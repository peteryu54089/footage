'use strict'

const path = require('path');

module.exports = {
    port: '3000',
    secret: 'secret',
    publicDir: path.resolve(__dirname, './public'),
    logPath: path.resolve(__dirname, './logs/koa-template.log'),
    postgres: {
        database: 'photomatic',
        username: 'islab',
        password: 'Ty6Lb!Gn85hQ',
        host: 'postgres',
        port: 5432,
        dialect: 'postgres',
        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000
        },
    }
};

