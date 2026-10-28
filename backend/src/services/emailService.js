import nodemailer from 'nodemailer';
import dns from 'node:dns';

// Fix for Windows / ISP DNS timeout on queryA for smtp.gmail.com
// Pre-populates Nodemailer's internal DNS cache using OS getaddrinfo (dns.lookup)
const ensureDnsResolved = async (host) => {
  if (!host) return;
  try {
    const { default: shared } = await import('nodemailer/lib/shared/index.js');
    await new Promise((resolve) => {
      dns.lookup(host, { all: true }, (err, addresses) => {
        if (!err && addresses && addresses.length > 0) {
          shared.dnsCache.set(host, {
            value: {
              addresses: addresses.map((a) => a.address),
              servername: host,
            },
            expires: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
          });
        }
        resolve();
      });
    });
  } catch (dnsErr) {
    // Non-fatal, continue with standard flow
  }
};

/**
 * Creates and configures the Nodemailer transporter using environment variables.
 */
const createTransporter = async () => {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return null;
  }

  // Pre-warm Nodemailer's DNS cache to avoid queryA ETIMEOUT
  await ensureDnsResolved(host);

  const port = parseInt(process.env.SMTP_PORT || '587', 10);
  const secure = process.env.SMTP_SECURE === 'true' || port === 465;

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
};

/**
 * Escapes HTML characters to prevent HTML injection in emails.
 */
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Sends a notification email when a new contact message is received.
 * @param {Object} contactData - The submitted contact details.
 * @returns {Promise<{ sent: boolean, messageId?: string, reason?: string, error?: string }>}
 */
export const sendContactNotification = async ({ name, email, subject, message }) => {
  const transporter = await createTransporter();

  if (!transporter) {
    console.info('[EmailService] SMTP settings are unconfigured or incomplete. Skipping email dispatch.');
    return {
      sent: false,
      reason: 'SMTP is not configured on the server. The submission was saved to database.',
    };
  }

  const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || 'satyanshugautam6@gmail.com';
  const senderEmail = process.env.SMTP_FROM || process.env.SMTP_USER;

  const mailOptions = {
    from: `"SATYANSHU.DEV Portfolio" <${senderEmail}>`,
    to: receiverEmail,
    replyTo: `"${name}" <${email}>`,
    subject: `[Portfolio Contact] ${subject} - from ${name}`,
    text: `You have received a new contact submission from your portfolio website:

Name: ${name}
Email: ${email}
Subject: ${subject}
Date: ${new Date().toLocaleString()}

Message:
${message}
`,
    html: `
      <div style="font-family: Arial, sans-serif; background-color: #080B14; color: #f8fafc; padding: 24px; border-radius: 8px;">
        <div style="border-bottom: 2px solid #22D3EE; padding-bottom: 12px; margin-bottom: 20px;">
          <h2 style="color: #22D3EE; margin: 0;">New Message from SATYANSHU.DEV</h2>
          <p style="color: #94A3B8; font-size: 13px; margin: 4px 0 0 0;">Received on ${new Date().toLocaleString()}</p>
        </div>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr>
            <td style="padding: 8px 0; color: #94a3b8; width: 90px; font-weight: bold;">Sender:</td>
            <td style="padding: 8px 0; color: #f8fafc;">${escapeHtml(name)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #94a3b8; font-weight: bold;">Email:</td>
            <td style="padding: 8px 0; color: #22D3EE;"><a href="mailto:${escapeHtml(email)}" style="color: #22D3EE;">${escapeHtml(email)}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #94a3b8; font-weight: bold;">Subject:</td>
            <td style="padding: 8px 0; color: #f8fafc;">${escapeHtml(subject)}</td>
          </tr>
        </table>
        <div style="background-color: #0F172A; border-left: 4px solid #6366F1; padding: 16px; border-radius: 4px;">
          <h4 style="margin: 0 0 8px 0; color: #6366F1;">Message:</h4>
          <p style="margin: 0; white-space: pre-wrap; line-height: 1.6; color: #E2E8F0;">${escapeHtml(message)}</p>
        </div>
        <div style="margin-top: 24px; border-top: 1px solid #1E293B; padding-top: 12px; font-size: 12px; color: #64748B;">
          This message was sent from your portfolio contact form at satyanshu.dev
        </div>
      </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`[EmailService] Notification email sent successfully: ${info.messageId}`);
    return {
      sent: true,
      messageId: info.messageId,
    };
  } catch (err) {
    if (err.message.includes('InvalidSecondFactor') || err.message.includes('534-5.7.9') || err.message.includes('Application-specific password required')) {
      console.error(`[EmailService] Google App Password Required: Google requires a 16-character App Password for SMTP.`);
      console.warn(`[EmailService Hint] Go to https://myaccount.google.com/apppasswords to generate an App Password and set it in SMTP_PASS.`);
    } else if (err.message.includes('queryA ETIMEOUT')) {
      console.error(`[EmailService DNS Error] DNS timeout resolving ${process.env.SMTP_HOST}.`);
    } else {
      console.error(`[EmailService] Failed to send email: ${err.message}`);
    }

    return {
      sent: false,
      error: err.message,
    };
  }
};

export default {
  sendContactNotification,
};
