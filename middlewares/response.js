'use strict'

const { logger } = require('./logger');

// 這個 middleware 用於將 ctx.result 中的內容最終回傳給客戶端
// 回傳的格式遵循這樣的格式: { code: 0, data: any }
function responseHandler(ctx) {
    if (ctx.result !== undefined) {
        ctx.type = 'json';
        ctx.body = {
            code: 0,
            data: ctx.result
        };
    }
}

// 這個 middleware 處理在其他 middleware 中出現的異常
// 並將異常消息回傳給客戶端: { code: '錯誤代碼', message: '錯誤信息' }
function errorHandler (ctx, next) {
    return next().catch(err => {
        if (err.code == null) {
            logger.error(err.stack);
        }

        ctx.body = {
            code: err.code || -1,
            message: err.message.trim()
        };

        ctx.status = 200; // 保證返回狀態是 200, 這樣前端不會拋出異常
        return Promise.resolve();
    });
}

module.exports = {
    responseHandler,
    errorHandler
};

