'use strict'

const customer = {};

customer.contact = async(ctx) => {
    await ctx.render('customer-contact', {
        
    });
};

customer.price = async(ctx) => {
    await ctx.render('customer-price', {
        
    });
};

module.exports = customer;

