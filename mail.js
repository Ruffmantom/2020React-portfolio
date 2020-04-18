const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
// getting our Env variables
const autoKey = process.env.MAILGUN_API_KEY;
const domainUrl = process.env.MAILGUN_DOMAIN;
const myEmail = process.env.REACT_APP_MY_EMAIL;

const auth = {
    auth: {
        api_key: autoKey,
        domain: domainUrl
    }
};


const transporter = nodemailer.createTransport(mailGun(auth));


const sendMail = (email, personsName, message, cb) => {
    const mailOptions = {
        from: email,
        to: myEmail,
        subject: personsName,
        text: message
    };


    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            throw new Error(err)
            cb(err, null);
        } else {
            cb(null, data)
        }
    });

}

module.exports = sendMail;

