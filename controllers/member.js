'use strict'

const member = {};

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

member.signuppost = async(ctx) => {
    let name = ctx.request.body.name;
    let email = ctx.request.body.email;
    let password = ctx.request.body.password;
    let phone = ctx.request.body.phone;
    let sex = ctx.request.body.sex;
    console.log(name);
    console.log(email);
    console.log(password);
    console.log(phone);
    console.log(sex);
};

module.exports = member;

