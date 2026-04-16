import { Router } from "express";
import { Resend } from "resend";

const router = Router();

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY is not set");
  return new Resend(key);
}

const TO = "My211411@gmail.com";
const FROM = "contact@kasiacare.com";

router.post("/contact", async (req, res) => {
  try {
    const { firstName, lastName, phone, address, city, state, email, message } = req.body;
    const resend = getResend();
    await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: `New Contact Message from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}, ${city}, ${state}</p>
        <hr/>
        <p><strong>Message:</strong></p>
        <p>${message || "(no message)"}</p>
      `,
    });
    res.json({ ok: true });
  } catch (err: any) {
    console.error("Contact email error:", err);
    res.status(500).json({ ok: false, error: err.message });
  }
});

router.post("/free-trial", async (req, res) => {
  try {
    const { firstName, lastName, phone, address, city, state, email, plan } = req.body;
    const resend = getResend();
    await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: `New Free Trial Signup — ${firstName} ${lastName}`,
      html: `
        <h2>New Free Trial Signup</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}, ${city}, ${state}</p>
        <p><strong>Plan Selected:</strong> ${plan || "(not selected)"}</p>
      `,
    });
    res.json({ ok: true });
  } catch (err: any) {
    console.error("Free trial email error:", err);
    res.status(500).json({ ok: false, error: err.message });
  }
});

router.post("/angels", async (req, res) => {
  try {
    const { firstName, lastName, phone, address, city, state, email, role, about } = req.body;
    const resend = getResend();
    await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: `New Angel Application — ${firstName} ${lastName}`,
      html: `
        <h2>New KasiaCare Angel Application</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}, ${city}, ${state}</p>
        <p><strong>Role Interest:</strong> ${role || "(not selected)"}</p>
        <hr/>
        <p><strong>About:</strong></p>
        <p>${about || "(nothing provided)"}</p>
      `,
    });
    res.json({ ok: true });
  } catch (err: any) {
    console.error("Angels email error:", err);
    res.status(500).json({ ok: false, error: err.message });
  }
});

export default router;
