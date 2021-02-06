'use strict'

const darkroom = {};

darkroom.film = async(ctx) => {
    await ctx.render('darkroom-film', {
        
    });
};

module.exports = darkroom;

