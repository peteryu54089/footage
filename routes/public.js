'use strict'

const Router = require('koa-router');
const index = require('../controllers/index');
const db = require('../controllers/db');
const classic = require('../controllers/classic');
const darkroom = require('../controllers/darkroom');

const router = new Router();

router.get('/', index);
router.get('/db', db);
router.get('/classic-black', classic.black);
router.get('/classic-price', classic.price);
router.get('/classic-photobooth', classic.photobooth);
router.get('/darkroom-film', darkroom.film);
router.get('/darkroom-class', darkroom.class);
router.get('/darkroom-lab', darkroom.lab);
router.get('/darkroom-price', darkroom.price);

module.exports = router;

