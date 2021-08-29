// const sgMail = require("@sendgrid/mail");
// const dotenv = require("dotenv");
// //any therd party in services
// dotenv.config({
//   path: "../../../.env",
// });
// const sendgridAPIKey = process.env.MAIL_SENDER_API;
// sgMail.setApiKey(sendgridAPIKey); //any email is send now known its from this account becuase of the key
// const ForgotPassEmail = (email, id, token) => {
//   sgMail
//     .send({
//       to: email,
//       from: process.env.SENDER_EMAIL,
//       subject: "FORGOT PASSWORD 2",
//       text: "RESET PASSWOED LINK :", //link have page have reset pasword,
//       html: `<a href='http://localhost:3000/resetpassword?token=${token}'> Reset Password! </a>`, //send token with it
//     })
//     .then(() => console.log("Email Send"))
//     .catch((error) => {
//       console.log(error.message);
//     });
// };

// module.exports = ForgotPassEmail;
