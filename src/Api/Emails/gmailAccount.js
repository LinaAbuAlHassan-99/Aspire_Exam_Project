"use strict";
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

async function main() {

  
  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.GMAIL_USER, 
      pass: process.env.GMAIL_PASS,
    },
  });

  
  let info = await transporter.sendMail({
    from: '"Lina" <liabualhassan17@gmail.com>', // sender address
    to: "ddoshyavpdybbtveth@tbbyt.net", // list of receivers
    subject: "Hello from Node.js", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
 
}

main().catch(console.error);
