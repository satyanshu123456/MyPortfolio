import Contact from '../models/Contact.js';
import { sendContactNotification } from '../services/emailService.js';
import { getDBStatus } from '../config/database.js';

// In-memory fallback storage in case MongoDB is temporarily unavailable or not yet configured
const inMemorySubmissions = [];

/**
 * Handle new contact message submissions.
 * POST /api/contact
 */
export const submitContact = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate presence and basic constraints
    const errors = [];
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      errors.push('Name must be at least 2 characters long.');
    }
    if (!email || typeof email !== 'string') {
      errors.push('A valid email address is required.');
    } else {
      const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;
      if (!emailRegex.test(email.trim())) {
        errors.push('Please provide a properly formatted email address.');
      }
    }
    if (!subject || typeof subject !== 'string' || subject.trim().length < 2) {
      errors.push('Subject must be at least 2 characters long.');
    }
    if (!message || typeof message !== 'string' || message.trim().length < 5) {
      errors.push('Message must be at least 5 characters long.');
    }

    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors,
      });
    }

    const cleanData = {
      name: name.trim().slice(0, 100),
      email: email.trim().toLowerCase().slice(0, 254),
      subject: subject.trim().slice(0, 200),
      message: message.trim().slice(0, 5000),
    };

    let savedContactId = null;
    let savedToDatabase = false;
    const dbStatus = getDBStatus();

    if (dbStatus.isConnected) {
      try {
        const contactDoc = new Contact(cleanData);
        await contactDoc.save();
        savedContactId = contactDoc._id;
        savedToDatabase = true;
      } catch (dbErr) {
        console.error('[ContactController] MongoDB save failed:', dbErr.message);
      }
    }

    // Fallback if DB is not connected or failed
    if (!savedToDatabase) {
      const fallbackRecord = {
        _id: 'mem_' + Date.now(),
        ...cleanData,
        createdAt: new Date(),
        storedIn: 'memory_fallback',
      };
      inMemorySubmissions.push(fallbackRecord);
      savedContactId = fallbackRecord._id;
      console.warn('[ContactController] Saved submission to in-memory fallback because MongoDB is offline.');
    }

    // Attempt email notification dispatch
    const emailResult = await sendContactNotification(cleanData);

    // If saved to MongoDB, update email dispatch state
    if (savedToDatabase && savedContactId) {
      try {
        await Contact.findByIdAndUpdate(savedContactId, {
          emailSent: emailResult.sent,
          emailError: emailResult.error || emailResult.reason || null,
        });
      } catch (updateErr) {
        console.error('[ContactController] Failed to update contact with email status:', updateErr.message);
      }
    }

    return res.status(201).json({
      success: true,
      message: 'Thank you for reaching out! Your message has been received.',
      data: {
        id: savedContactId,
        savedToDatabase,
        emailNotificationSent: emailResult.sent,
        notice: emailResult.sent
          ? 'Notification email delivered to Satyanshu.'
          : (emailResult.reason || 'Notification queued/logged on server.'),
      },
    });
  } catch (error) {
    return next(error);
  }
};

/**
 * Health check endpoint for contact service.
 * GET /api/contact/health
 */
export const contactHealth = (req, res) => {
  const dbStatus = getDBStatus();
  return res.status(200).json({
    status: 'ok',
    databaseConnected: dbStatus.isConnected,
    smtpConfigured: Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS),
    timestamp: new Date().toISOString(),
  });
};

export default {
  submitContact,
  contactHealth,
};

