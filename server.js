const Koa = require('koa');
const Router = require('koa-router');
const pg = require('pg');
 
let app = new Koa();
let router = new Router();
 
router.get('/', async ctx => {
    ctx.body = 'index';
});
 
router.get('/db', async ctx => {
    let pool = new pg.Pool({
        host: 'postgres',
        user: 'islab',
        database: 'photomatic',
        password: 'Ty6Lb!Gn85hQ',
        port: 5432,
        max: 20,
        idleTimeoutMillis: 3000
    });
    let connect = await pool.connect();
    try {
        let res = await connect.query('SELECT $1::varchar AS OUT', ['Hello World By Async']);
        ctx.body = res.rows[0].out;
    } finally {
        connect.release();
    }
});
 
app.use(router.routes());
app.listen(3000);

