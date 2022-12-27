const nodemailer = require("nodemailer");

exports.sendReport = async function (req, res) {

    const infoReport = {
        recipient: req.body.recipient,
        subject: req.body.subject,
        content: req.body.content
    }

    const transporter = nodemailer.createTransport({
        service: "gmail",
        port: 587,
        secure: false,
        auth: {
            user: "",
            pass: ""
        },
        tls: {
            rejectUnauthorized: false
        }
    })

    const mailOptions = {
        from: "admin@KKR.pl",
        to: infoReport.recipient,
        subject: infoReport.subject,
        text: infoReport.content
    }

    // transporter.sendMail(mailOptions, (error, info) => {
    //     if (error) {
    //         console.error(`Something went wrong! Error: ${error}`);
    //     } else {
    //         console.log("Sent: " + info.response);
    //     }
    // })
}