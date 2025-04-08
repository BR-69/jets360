// import nodemailer from 'nodemailer';

// export const sendEmail = async (req, res) => {
//   const { name, email, phone, message } = req.body;

//   if (!name || !email || !phone || !message) {
//     return res.status(400).json({ message: 'All fields are required.' });
//   }

//   const transporter = nodemailer.createTransport({
//     service: 'Gmail',
//     auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//     },
//   });

//   const mailOptions = {
//     from: email,
//     to: 'cukamfortnite@proton.me',
//     subject: `Contact Form: ${name}`,
//     text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     res.status(200).json({ message: 'Email sent successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error sending email', error });
//   }
// };


import nodemailer from 'nodemailer';

export const sendEmail = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: 'cukamfortnite@proton.me',
    subject: `Contact Form: ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error sending email', error });
  }
};

export default sendEmail;