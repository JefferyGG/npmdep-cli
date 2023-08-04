
import * as Koa from 'koa';
import * as Router from 'koa-router';
const path = require('path');
const serve = require('koa-static');

const app = new Koa();
const router = new Router();


// app.use(async ctx => {
//   ctx.body = 'Hello World';
// });

app.use(serve(path.join(__dirname, '../public')));

app.listen(3000);

console.log("Service started:  http://localhost:3000");
