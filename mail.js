const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});

const send = (subject, html) => {
    const mailOptions = {
        from: process.env.MAIL_FROM,
        to: process.env.MAIL_TO,
        subject,
        html
    };

    try {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
               console.log({error}); 
            } else {
                console.log(`Email sent: ${info.response}`);
            }
        })
    } catch (err) {
        console.log({ err });
    }
};

module.exports = {
    send,
};