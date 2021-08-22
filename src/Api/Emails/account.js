const emailjs = require("emailjs-com");

const sendEmail = () => {
  emailjs
    .sendForm(
      "gmail",
      "template_fpbsxzi",
      e.target,
      "user_9GYCL9UYcd9XNy8Ntr5RK"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
};

module.exports = sendEmail;
