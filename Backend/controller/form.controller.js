import nodemailer from "nodemailer"

export const contactForm = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,   // Your Gmail address
        pass: process.env.EMAIL_PASS
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // send to yourself
      subject: 'Contact Form Submission',
      text: `You have received a new message:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    });

    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
}