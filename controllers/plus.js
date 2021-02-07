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

plus.film = async(ctx) => {
    await ctx.render('plus-film', {
        
    });
};

plus.price = async(ctx) => {
    await ctx.render('plus-price', {
        
    });
};

plus.photobooth = async(ctx) => {
    await ctx.render('plus-photobooth', {
        
    });
};

module.exports = plus;

