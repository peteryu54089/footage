'use strict'

const member = {};
const jwt = require('jsonwebtoken');
const session = require('koa-session');
const config = require('../config');
const Member = require('../models/member');

member.center = async(ctx) => {
    if (ctx.session.email === undefined || ctx.session.email === null) {
        ctx.redirect('member-signin');
    } else {
        await ctx.render('member-center', {
            
        });
    }
};

member.signin = async(ctx) => {
    await ctx.render('member-signin', {
        
    });
};

member.signup = async(ctx) => {
    await ctx.render('member-signup', {
    
    });
};

member.password = async(ctx) => {
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
    ctx.redirect('member-center');
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
    ctx.redirect('member-center');
};

member.signoutpost = async(ctx) => {
    ctx.session.email = null;
    ctx.redirect('member-signin');
};

module.exports = member;

