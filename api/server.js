const nodemailer = require("nodemailer");
export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    const { firstName, lastName, email, message } = req.body;

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        }
    });

    let mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `New Contact Form Submission from ${firstName} ${lastName}`,
        text: message
    };

    try {
        await transporter.sendMail(mailOptions);
        return res.status(200).json({ code: 200, message: "Message Sent!" });
    } catch (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ code: 500, message: "Error sending message. Try again later." });
    }
}
