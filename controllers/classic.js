'use strict'

const classic = {};

classic.black = async(ctx) => {
    await ctx.render('classic-black', {
        
    });
};

classic.price = async(ctx) => {
    await ctx.render('classic-price', {
    
    });
};

classic.photobooth = async(ctx) => {
    await ctx.render('classic-photobooth', {
    
    });
};

module.exports = classic;

