'use strict'

const shop = {};

shop.about = async(ctx) => {
    await ctx.render('shop-about', {
        
    });
};

shop.photoboothcase = async(ctx) => {
    await ctx.render('shop-photoboothcase', {
        
    });
};

module.exports = shop;

