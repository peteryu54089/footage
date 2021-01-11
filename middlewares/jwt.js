'use strict'

const koaJwt = require('koa-jwt');
const jwt = require('jsonwebtoken');
const config = require('../config');

const jwtMiddleware = koaJwt({ secret: config.secret });

module.exports = function (ctx, next) {
    // 將 token 中的數據解密後存到 ctx 中
    if (typeof ctx.request.headers.authorization === 'string') {
        const token = ctx.request.headers.authorization.slice(7);
        ctx.jwtData = jwt.verify(token, config.secret);
    }
    return jwtMiddleware(ctx, next);
};

