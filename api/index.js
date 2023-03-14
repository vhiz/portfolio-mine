const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const cors = require("cors");
const helmet = require("helmet");

require("dotenv/config");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(
  cors({
    origin: process.env.CORS,
  })
);
app.use(express.json());
app.use(helmet());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.AUTH,
    pass: process.env.PASS,
  },
});

app.post("/mail", async (req, res) => {
  try {
    const mailOptions = {
      from: req.body.email,
      to: "victormgbeahurike82@gmail.com",
      subject: "Message from portfolio",
      html: `<p>${req.body.message}</p> from ${req.body.email}`,
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent");

    return res.status(200).json("Message Sent");
  } catch (error) {
    console.log(error.message);
    return res.status(500).json("Error Sending Message");
  }
});

app.listen(3004, () => {
  console.log("connected");
});
