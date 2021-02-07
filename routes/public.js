'use strict'

const Router = require('koa-router');
const index = require('../controllers/index');
const db = require('../controllers/db');
const classic = require('../controllers/classic');
const darkroom = require('../controllers/darkroom');
const plus = require('../controllers/plus');
const photobooth = require('../controllers/photobooth');
const shop = require('../controllers/shop');
const customer = require('../controllers/customer');

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
router.get('/darkroom-photobooth', darkroom.photobooth);
router.get('/plus-color', plus.color);
router.get('/plus-profile', plus.profile);
router.get('/plus-film', plus.film);
router.get('/plus-price', plus.price);
router.get('/plus-photobooth', plus.photobooth);
router.get('/photobooth-about', photobooth.about);
router.get('/shop-about', shop.about);
router.get('/shop-photoboothcase', shop.photoboothcase);
router.get('/customer-contact', customer.contact);
router.get('/customer-price', customer.price);
router.get('/customer-faq', customer.faq);
router.get('/customer-qna', customer.qna);
router.get('/customer-notice', customer.notice);

module.exports = router;

