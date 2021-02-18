'use strict'

const Router = require('koa-router');
const jwtMiddleware = require('../middlewares/jwt');

const router = new Router();

router.use(jwtMiddleware);

module.exports = router;

