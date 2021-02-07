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

customer.faq = async(ctx) => {
    await ctx.render('customer-faq', {
        
    });
};

module.exports = customer;

