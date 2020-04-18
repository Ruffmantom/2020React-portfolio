const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
// getting our Env variables
const myEmail = process.env.REACT_APP_MY_EMAIL;

const auth = {
    auth: {
        api_key: process.env.MAILGUN_API_KEY || "59b3f4efda0902b404f96932c2d72976-915161b7-c9779ef0",
        domain: process.env.MAILGUN_DOMAIN || "sandbox8509d310417b453886ec659721d817ff.mailgun.org"
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

