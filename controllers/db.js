'use strict'

/*const connect = require('../lib/db');

const db = async (ctx, next) => {
    let res = await connect.query('SELECT $1::varchar AS OUT', ['Hello World By Async']);
    ctx.body = res.rows[0].out;
};*/

const Admin = require('../models/admin');
const Member = require('../models/member');
const Product = require('../models/product');
const Close = require('../models/close');
const Order = require('../models/order');
const Reset = require('../models/reset');

const db = async (ctx, next) => {
    
}

module.exports = db;

