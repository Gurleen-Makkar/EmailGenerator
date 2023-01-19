import nodemailer from "nodemailer";
import dotenv from "dotenv"

dotenv.config();

async function Emailgenerator() {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, 
    auth: {
      user: process.env.MAIL_USER_EMAIL, // generated ethereal user
      pass: process.env.MAIL_USER_PASSWORD, // generated ethereal password
    },
  });

  await transporter.sendMail({
    from: process.env.MAIL_FROM, // sender address
    to: process.env.MAIL_TO, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });
}

Emailgenerator();
export default Emailgenerator;
