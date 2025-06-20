import nodemailer from 'nodemailer';

export async function POST(req) {
  const data = await req.json();

  const { fullName, companyName, email, whatsapp, sendEstimate } = data;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `OOHBUZZ <${email}>`,
    to: 'info@oohbuzz.com',
    bcc: ['send@dev.quickserver.in'],
    replyTo: email,
    subject: '📩 New Estimate Request Received',
    html: `
    <div style="font-family: 'Segoe UI', sans-serif; font-size: 16px; color: #333; line-height: 1.6;">
      <h2 style="color: #004aad;">New Estimate Request</h2>
      <p>You've received a new estimate request from the website. Below are the submitted details:</p>

      <table style="margin-top: 10px; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px; font-weight: bold;">Full Name:</td>
          <td style="padding: 8px;">${fullName}</td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold;">Company Name:</td>
          <td style="padding: 8px;">${companyName || '—'}</td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold;">Email Address:</td>
          <td style="padding: 8px;">${email}</td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold;">WhatsApp Number:</td>
          <td style="padding: 8px;">${whatsapp}</td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold;">Send Estimate via WhatsApp/Email:</td>
          <td style="padding: 8px;">${sendEstimate ? 'Yes ✅' : 'No ❌'}</td>
        </tr>
      </table>

      <p style="margin-top: 20px;">🔁 Please follow up with the client as soon as possible.</p>
      <p style="color: #999;">This is an automated notification from <strong>oohbuzz.com</strong>.</p>
    </div>
  `,
  };


  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 });
  }
}
