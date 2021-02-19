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

member.signuppost = async(ctx) => {
    let name = ctx.request.body.name;
    let email = ctx.request.body.email;
    let password = ctx.request.body.password;
    let phone = ctx.request.body.phone;
    let sex = ctx.request.body.sex;
    
    //await Member.create({ name, email, password, phone, sex });
    ctx.session.email = email;
    ctx.redirect('member-center');
};

member.signoutpost = async(ctx) => {
    ctx.session.email = null;
    ctx.redirect('member-signin');
};

module.exports = member;

