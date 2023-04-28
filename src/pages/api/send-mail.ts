// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const message = {
    from: "sales@iroottech.com",
    to: "sales@iroottech.com",
    subject: `${req.body.email} request contact-us`,
    html: `<p>Name: ${req.body.name} , Email: ${req.body.email} request contact-us with Description: ${req.body.description} </p>`,
  };
  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    auth: {
      user: "sales@iroottech.com",
      pass: "Matrix@2023@",
    },
  });

  if (req.method === "POST") {
    transporter.sendMail(
      { ...message, attachments: req.body.files },
      (err: any, info) => {
        if (err) {
          res.status(404).json({
            message: `Connection refused at ${err.address}` as any,
          });
        } else {
          res.status(250).json({
            message: `Message delivered to ${info.accepted}`,
          });
        }
      }
    );
  }

  res.status(200).json({ name: "John Doe" });
}
