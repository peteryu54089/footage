'use strict'

const connect = require('../lib/db');

const db = async (ctx, next) => {
    let res = await connect.query('SELECT $1::varchar AS OUT', ['Hello World By Async']);
    ctx.body = res.rows[0].out;
};

module.exports = db;

