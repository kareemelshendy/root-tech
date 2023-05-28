// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import multer from 'multer';

async function parseFormData(
	req: NextApiRequest & { files?: any },
	res: NextApiResponse
) {
	const storage = multer.memoryStorage();
	const multerUpload = multer({ storage });
	const multerFiles = multerUpload.any();
	await new Promise((resolve, reject) => {
		multerFiles(req as any, res as any, (result: any) => {
			if (result instanceof Error) {
				return reject(result);
			}
			return resolve(result);
		});
	});
	return {
		fields: req.body,
		files: req.files,
	};
}
export const config = {
	api: {
		bodyParser: false,
	},
};
export default async function handler(
	req: NextApiRequest & { files?: any },
	res: NextApiResponse
) {
	const result = await parseFormData(req, res);
	const message = {
		from: 'sales@iroottech.com',
		to: 'sales@iroottech.com',
		subject: `${result.fields.email} request contact-us`,
		// html: `<p>Name: ${req.body.name} , Email: ${req.body.email} request contact-us with Description: ${req.body.description} </p>`,

		html: `<center style="width: 100%; table-layout: fixed; padding-bottom: 64px">
    <table
      style="
        width: 98%;
        max-width: 600px;
        background-color: #fff;
        font-family: 'Inter', sans-serif;
        text-align: center;
      "
    >
      <!-- BORDER -->
      <tr>
        <td style="padding: 0; padding-top: 64px">
          <a href="#"
            ><img
              src="https://res.cloudinary.com/dszwwo7hg/image/upload/v1682770181/logo_ykeihh.png"
              alt="IRoot Tech"
          /></a>
        </td>
      </tr>

      <tr>
        <td style="padding: 0; padding-top: 24px">
          <table style="width: 100%">
            <tr>
              <td style="padding: 0">
                <h3
                  style="
                    font-size: 22px;
                    /* font-weight: 600; */
                    margin: 0;
                  "
                >
                  <span style="font-weight: bold"
                    >Icoming message!</span
                  ><br />
                  We have recived a message from ${result.fields.name}
                </h3>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <tr>
        <td style="padding: 0; padding-top: 30px">
          <table style="width: 100%">
            <tr>
              <td style="padding: 0">
                <p
                  style="
                    font-size: 16px;
                    line-height: 32px;
                    color: #333333;
                    margin: 0;
                  "
                >
                ${result.fields.description}
                </p>
                <p
                  style="
                    font-size: 16px;
                    line-height: 32px;
                    color: #333333;
                    margin: 0;
                  "
                >
               Email : ${result.fields.email} 
                </p>
                <p
                  style="
                    font-size: 16px;
                    line-height: 32px;
                    color: #333333;
                    margin: 0;
                  "
                >
                Subscribe to newsletter : ${
					result.fields.subscribe === 'true' ? 'yes' : 'no'
				} 
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <tr>
        <td style="padding: 0; padding: 32px">
          <div
            style="
              height: 1px;
              width: 125px;
              background-color: #0000003d;
              margin: 0 auto;
            "
          ></div>
        </td>
      </tr>

      <tr>
        <td style="padding: 0; padding: 16px 0">
          <p style="color: #999999; font-size: 12px">
            Copyright©iroottech 2022-2023
          </p>
        </td>
      </tr>
    </table>
    <!-- End Main Class -->
  </center>`,
	};
	const transporter = nodemailer.createTransport({
		host: 'smtp.office365.com',
		port: 587,
		auth: {
			user: 'sales@iroottech.com',
			pass: 'Matrix@2023@',
		},
	});

	if (req.method === 'POST') {
		let attachments: any[] = [];
		if (result.files && Array.isArray(result.files)) {
			result.files.forEach((element) => {
				attachments.push({
					filename: element.originalname,
					content: element.buffer,
				});
			});
		}
		transporter.sendMail(
			{ ...message, attachments: attachments },
			(err: any, info: any) => {
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

	res.status(200).json({ name: 'John Doe' });
}
