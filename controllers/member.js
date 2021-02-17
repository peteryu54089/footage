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

module.exports = member;

