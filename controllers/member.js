'use strict'

const member = {};
const jwt = require('jsonwebtoken');
const session = require('koa-session');
const nodemailer = require('nodemailer');
const config = require('../config');
const Member = require('../models/member');
const Order = require('../models/order');
const Reset = require('../models/reset');

var mailTransport = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: config.gmail.user,
    pass: config.gmail.pass
  },
});

member.order = async(ctx, next) => {
    if (ctx.session.email === undefined || ctx.session.email === null) {
        ctx.redirect('member-signin');
        return next();
    }
    
    let member = await Member.findOne({ where: { email: ctx.session.email } });
    if (member === null) {
        ctx.session.email = null;
        ctx.redirect('member-signup');
        return next();
    }
        
    let orders = await Order.findAll({ where: { member_id: member.id }, order: [['begin_time', 'DESC']] });
    let orderList = [];
    orders.forEach(order => {
        orderList.push({
            id: order.id,
            product_name: order.product_name,
            begin_time: String(order.begin_time).substring(4, 24),
            end_time: String(order.end_time).substring(4, 24),
            price: order.price,
            is_finished: Date.now() >= order.begin_time ? true : false
        });
    });
        
    await ctx.render('member-order', {
        orderList: orderList
    });
};

member.info = async(ctx, next) => {
    if (ctx.session.email === undefined || ctx.session.email === null) {
        ctx.redirect('member-signin');
        return next();
    }
    
    let member = await Member.findOne({ where: { email: ctx.session.email } });
    if (member === null) {
        ctx.session.email = null;
        ctx.redirect('member-signup');
        return next();
    }
    
    await ctx.render('member-info', {
        member: member
    });
};

member.signin = async(ctx, next) => {
    await ctx.render('member-signin', {
        
    });
};

member.signup = async(ctx, next) => {
    await ctx.render('member-signup', {
    
    });
};

member.forgot = async(ctx, next) => {
    await ctx.render('member-forgot', {
        
    });
};

member.reset = async(ctx, next) => {
    await ctx.render('member-reset', {
        
    });
};

member.signinpost = async(ctx, next) => {
    let email = ctx.request.body.email;
    let password = ctx.request.body.password;
    let member = await Member.findOne({ where: { email: email, password: password } });
    
    if (member === null) {
        ctx.redirect('member-forgot');
        return next();
    }
    
    ctx.session.email = email;
    ctx.redirect('member-order');
};

member.signuppost = async(ctx, next) => {
    let name = ctx.request.body.name;
    let email = ctx.request.body.email;
    let password = ctx.request.body.password;
    let phone = ctx.request.body.phone;
    let sex = ctx.request.body.sex;
    
    if (name.trim() === '' || email.trim() === '' || password.trim() === '' || phone.trim() === '' || sex.trim() === '') {
        ctx.redirect('member-signup');
        return next();
    }
    
    let member = await Member.findOne({ where: { email: email } });
    if (member !== null) {
        ctx.redirect('member-signin');
        return next();
    }
    
    await Member.create({ name, email, password, phone, sex });
    ctx.session.email = email;
    ctx.redirect('member-order');
};

member.signoutpost = async(ctx, next) => {
    ctx.session.email = null;
    ctx.redirect('member-signin');
};

member.orderdelete = async(ctx, next) => {
    if (ctx.session.email === undefined || ctx.session.email === null) {
        ctx.redirect('member-signin');
        return next();
    }
    
    let member = await Member.findOne({ where: { email: ctx.session.email } });
    if (member === null) {
        ctx.session.email = null;
        ctx.redirect('member-signup');
        return next();
    }

    await Order.destroy({ where: { id: ctx.request.body.id } });
    ctx.result = 'success';
    return next();
};

member.infopost = async(ctx, next) => {
    let name = ctx.request.body.name;
    let email = ctx.request.body.email;
    let password = ctx.request.body.password;
    let phone = ctx.request.body.phone;
    let sex = ctx.request.body.sex;
    
    if (name.trim() === '' || email.trim() === '' || password.trim() === '' || phone.trim() === '' || sex.trim() === '') {
        ctx.redirect('member-info');
        return next();
    }
    
    if (ctx.session.email === undefined || ctx.session.email === null) {
        ctx.redirect('member-signin');
        return next();
    }
    
    let member = await Member.findOne({ where: { email: ctx.session.email } });
    if (member === null) {
        ctx.session.email = null;
        ctx.redirect('member-signup');
        return next();
    }
    
    await member.update({ name: name, email: email, password: password, phone: phone, sex: sex });
    ctx.redirect('member-info');
};

member.forgotpost = async(ctx, next) => {
    let token = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < 20; i++ ) {
        token += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    ctx.session.token = token;
    
    let member = await Member.findOne({ where: { email: ctx.request.body.email } });
    if (member === null) {
        ctx.session.email = null;
        ctx.redirect('member-signup');
        return next();
    }
    
    let member_id = member.id;
    let expired_time = Date.now();
    await Reset.create({ member_id, token, expired_time });
    
    mailTransport.sendMail({
        from: 'Footage <t109598035@ntut.org.tw>',
        to: ctx.request.body.email,
        subject: '[ Footage ] Reset Password',
        html: '<h1>Hello</h1><h3>您已申請重設密碼，請於瀏覽器輸入以下網址 (http://35.72.85.104/member-reset) 進行重設。</h3><h3>若您並無進行上述動作，請與我們 (http://35.72.85.104) 聯繫。</h3><h3>此郵件由系統自動發送，請勿直接回覆。</h3><p>Footage 管理團隊 上</p>',
    }, function(err) {
        if (err) {
            console.log('Unable to send email: ' + err);
        }
    });
    ctx.redirect('member-signin');
};

member.resetpost = async(ctx, next) => {
    let reset = await Reset.findOne({ where: { token: ctx.session.token } });
    if (reset === null) {
        ctx.redirect('member-forgot');
        return next();
    }
    
    let member = await Member.findOne({ where: { id: reset.member_id } });
    if (member === null) {
        ctx.session.email = null;
        ctx.redirect('member-signup');
        return next();
    }
    
    if (Math.ceil((Date.now() - reset.expired_time) / (1000 * 3600 * 24)) > 1) {
        ctx.redirect('member-forgot');
        return next();
    }
    
    await member.update({ password: ctx.request.body.password });
    ctx.redirect('member-signin');
};

module.exports = member;

