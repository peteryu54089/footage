'use strict'

/*const connect = require('../lib/db');

const db = async (ctx, next) => {
    let res = await connect.query('SELECT $1::varchar AS OUT', ['Hello World By Async']);
    ctx.body = res.rows[0].out;
};*/

const Admin = require('../models/admin');
const User = require('../models/user');
const Product = require('../models/product');
const Close = require('../models/close');
const Order = require('../models/order');

const db = async (ctx, next) => {
    
}

module.exports = db;

