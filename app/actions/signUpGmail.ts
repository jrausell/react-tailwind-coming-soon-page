"use server";
import nodemailer from "nodemailer";

async function sendEmail({
  email,
  subject,
  message,
}: {
  email: string;
  subject: string;
  message: string;
}) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  const mailOptions = {
    from: "your_email@domain.test", // Put your email here
    to: email,
    subject: subject,
    text: message,
  };

  const info = await transporter.sendMail(mailOptions);

  if (info) {
    return { success: true, message: "Email sent successfully" };
  }

  return { success: false, message: "Email not sent" };
}
