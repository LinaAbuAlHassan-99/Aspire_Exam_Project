const sgMail = require("@sendgrid/mail");
const dotenv = require("dotenv");

dotenv.config();
const sendgridAPIKey = process.env.MAIL_SENDER_API;

sgMail.setApiKey(sendgridAPIKey); //any email is send now known its from this account becuase of the key
//sgMail.setApiKey(process.env.SENDGRI_API_KEY);
const updateEmail = (email) => {
  sgMail.send({
    to: email,
    from: process.env.SENDER_EMAIL,
    subject: "RESET PASSWORD",
    text: "RESET PASSWOED LINK :", //link have page have reset pasword,
    html: "<a href='http://google.com'></a>", //send token with it
  });
};
module.exports = updateEmail;
