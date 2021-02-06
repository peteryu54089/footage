'use strict'

const plus = {};

plus.color = async(ctx) => {
    await ctx.render('plus-color', {
        
    });
};

plus.profile = async(ctx) => {
    await ctx.render('plus-profile', {
        
    });
};

module.exports = plus;

