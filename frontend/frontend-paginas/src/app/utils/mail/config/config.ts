import { createTransport } from 'nodemailer';

const transporter = createTransport({
    service: "gmail",
    auth: {
        user: "desafioprogdispmoveis@gmail.com",
        pass: "hdvyusebgymbgvqy"
    },
});

export default transporter;
