const req = require('express/lib/request');
const nodemailer = require('nodemailer');

module.exports = class Email {
    constructor(body) {
        this.to = process.env.EMAIL_TO;
        this.name = body.name;
        this.body = body.message;
        this.from = body.email;
    }

    static createTransport() {
        nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            to: this.to,
            from: this.from,
            auth: {
                user: '',
                pass: '',
            },
        });
    }
    static async send()

    async sendMail() {}
    
    async sendMailToClient() {}
};
