const req = require('express/lib/request');
const nodemailer = require('nodemailer');

module.exports = class Email {
    constructor(user, body) {
        this.to = 'pinbar.ng@gmail.com';
        this.firstName = user.firstName;
        this.body = body;
    }

    static create() {
        nodemailer.createTransport({
            host: 'gmail.com',
            to: '',
            from: body.email,
            auth: {},
        });
    }

    async sendMail() {}
    async sendMailToClient() {}
};
