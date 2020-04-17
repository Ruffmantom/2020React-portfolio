const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
// getting our Env variables
const autoKey = process.env.AUTH_API_KEY;
const domainUrl = process.env.AUTH_DOMAIN;
const myEmail = process.env.MY_EMAIL;

const auth = {
    auth:{
        api_key: autoKey,
        domain: domainUrl
    }
};


const transporter = nodemailer.createTransport(mailGun(auth));


const sendMail = (email, personsName, message, cb) => {
    const mailOptions = {
        from: email,
        to: myEmail,
        personsName,
        message
    };


    transporter.sendMail(mailOptions, function(err, data){
        if(err){
            cb(err, null);
        } else{
           cb(null, data)
        }
    });
}

module.exports = sendMail;

