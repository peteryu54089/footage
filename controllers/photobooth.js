'use strict'

const photobooth = {};

photobooth.about = async(ctx) => {
    await ctx.render('photobooth-about', {
        
    });
};

module.exports = photobooth;

