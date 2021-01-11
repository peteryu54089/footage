'use strict'

const Router = require('koa-router');
const index = require('../controllers/index');
const db = require('../controllers/db');

const router = new Router();

router.get('/', index);
router.get('/db', db);

module.exports = router;

