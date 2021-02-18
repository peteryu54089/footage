'use strict'

const member = {};
const Member = require('../models/member');
const jwt = require('jsonwebtoken');
const config = require('../config');

member.center = async(ctx) => {
    await ctx.render('member-center', {
        
    });
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

member.signuppost = async(ctx, next) => {
    let name = ctx.request.body.name;
    let email = ctx.request.body.email;
    let password = ctx.request.body.password;
    let phone = ctx.request.body.phone;
    let sex = ctx.request.body.sex;
    
    //await Member.create({ name, email, password, phone, sex });
    ctx.result = jwt.sign({ email: email, password: password }, config.secret);
    return next();
};

module.exports = member;

