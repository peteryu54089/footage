'use strict'

const customer = {};

customer.contact = async(ctx) => {
    await ctx.render('customer-contact', {
        
    });
};

module.exports = customer;

