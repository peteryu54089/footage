'use strict'

const Koa = require('koa');
const bodyParser = require('koa-bodyparser')();
const staticCache = require('koa-static-cache');
const views = require('koa-views');
const session = require('koa-session');

const config = require('./config');
const publicRouter = require('./routes/public');
const privateRouter = require('./routes/private');
const { loggerMiddleware } = require('./middlewares/logger');
const { errorHandler, responseHandler } = require('./middlewares/response');

const app = new Koa();

app.keys = ['some secret hurr']; // 這行是要生成 cookie 時使用的，也就是下方其中一個選項 signed 所需要

const CONFIG = {
  key: 'koa:sess', // cookie 金鑰 (string) (預設: koa:sess)
  // (number || 'session') maxAge 是以毫秒為單位(1000 = 1 秒) (預設: 1 天)
  // 'session' 的相關設置將會影響到關閉瀏覽器清除 cookie or session
  // 注意: session cookie 若被竊取, 將會導致永不過期的問題
  maxAge: 86400000,
  autoCommit: true, // (boolean) 自動提交 header 資訊 (預設: true)
  overwrite: true, // (boolean) 可覆蓋若不覆蓋 (看不懂意思) (預設: true)
  httpOnly: true, // (boolean) 是否開啟 httpOnly，也就是要不要給 JavaScript 讀取 (預設: true)
  signed: true, // (boolean) 是否附上簽名 (看不懂意思) (預設: true)
  rolling: false, // (boolean) Force a session identifier cookie to be set on every response. (預設: is false)
  renew: true, // (boolean) 是否 session 即將到期時自動更新，也就是瀏覽器重新整理後會自動給予新的 session (建議給 true) (預設: is false)
};

app.use(session(CONFIG, app));

// Logger
app.use(loggerMiddleware);

// Error Handler
app.use(errorHandler);

// Global Middlewares
app.use(bodyParser);
app.use(staticCache(config.publicDir));

// Views
app.use(views(__dirname + '/public', {
    extension: 'pug'
}));

// Routes
app.use(publicRouter.routes(), publicRouter.allowedMethods());
app.use(privateRouter.routes(), privateRouter.allowedMethods());

// Response
app.use(responseHandler);

module.exports = app;

