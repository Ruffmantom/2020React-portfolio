const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
// getting our Env variables
const myEmail = process.env.REACT_APP_MY_EMAIL;
const myDomain = process.env.REACT_APP_MY_DOMAIN;
const myKey = process.env.REACT_APP_MY_KEY;

const auth = {
    auth: {
        api_key: process.env.MAILGUN_API_KEY || myKey,
        domain: process.env.MAILGUN_DOMAIN || myDomain
    }
};


const transporter = nodemailer.createTransport(mailGun(auth));


const sendMail = ( fullName,email, message, cb) => {
    const mailOptions = {
        from: email,
        to: myEmail,
        subject: fullName,
        text: message
    };


    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            throw new Error(err)
        } else {
            cb(null, data)
        }
    });

}

module.exports = sendMail;

