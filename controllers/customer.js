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

customer.qna = async(ctx) => {
    await ctx.render('customer-qna', {
        
    });
};

customer.notice = async(ctx) => {
    await ctx.render('customer-notice', {
        
    });
};

module.exports = customer;

