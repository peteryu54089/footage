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

module.exports = darkroom;

