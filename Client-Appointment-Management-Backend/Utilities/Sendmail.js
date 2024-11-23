const nodemailer = require('nodemailer');
 
// إعداد المرسل باستخدام متغيرات البيئة
const email = async (options) => {
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.PORTs,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.PASS_USER
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    const mailOptions = {
        from: 'Client Appointment Management <osamaeldemerdash3@gmail.com>',
        to: options.email,
        subject: options.subject,
        text: options.message,
        html: options.html // إرسال قالب HTML هنا
    };
 
    await transporter.sendMail(mailOptions);
};

module.exports = email;