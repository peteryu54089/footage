'use strict'

const shop = {};

shop.about = async(ctx) => {
    await ctx.render('shop-about', {
        
    });
};

module.exports = shop;

