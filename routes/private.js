'use strict'

const Router = require('koa-router');
const jwtMiddleware = require('../middlewares/jwt');
const member = require('../controllers/member');

const router = new Router();

router.use(jwtMiddleware);
router.get('/member-center', member.center);

module.exports = router;

