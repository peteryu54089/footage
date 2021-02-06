'use strict'

const Router = require('koa-router');
const index = require('../controllers/index');
const db = require('../controllers/db');
const classic = require('../controllers/classic');

const router = new Router();

router.get('/', index);
router.get('/db', db);
router.get('/classic-black', classic.black);
router.get('/classic-price', classic.price);

module.exports = router;

