'use strict'

const Router = require('koa-router');
const index = require('../controllers/index');
const db = require('../controllers/db');
const footage = require('../controllers/footage');

const router = new Router();

router.get('/', index);
router.get('/db', db);
router.get('/footage-black', footage.black);

module.exports = router;

