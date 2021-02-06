'use strict'

const darkroom = {};

darkroom.film = async(ctx) => {
    await ctx.render('darkroom-film', {
        
    });
};

darkroom.class = async(ctx) => {
    await ctx.render('darkroom-class', {
        
    });
};

darkroom.lab = async(ctx) => {
    await ctx.render('darkroom-lab', {
        
    });
};

darkroom.price = async(ctx) => {
    await ctx.render('darkroom-price', {
        
    });
};

module.exports = darkroom;

