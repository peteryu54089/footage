'use strict'

const member = {};
const jwt = require('jsonwebtoken');
const session = require('koa-session');
const config = require('../config');
const Member = require('../models/member');
const Order = require('../models/order');

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

member.password = async(ctx, next) => {
    await ctx.render('member-password', {
        
    });
};

member.signinpost = async(ctx, next) => {
    let email = ctx.request.body.email;
    let password = ctx.request.body.password;
    let member = await Member.findOne({ where: { email: email, password: password } });
    
    if (member === null) {
        ctx.redirect('member-password');
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

module.exports = member;

