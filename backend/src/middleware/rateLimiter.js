import rateLimit from 'express-rate-limit';

/**
 * Rate limiter for contact form submissions.
 * Allows maximum 5 requests per 15 minutes per IP to protect from spam/abuse.
 */
export const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per windowMs
  standardHeaders: true, // Return rate limit info in `RateLimit-*` headers
  legacyHeaders: false, // Disable `X-RateLimit-*` headers
  message: {
    success: false,
    message: 'Too many messages sent from this IP. Please wait 15 minutes before trying again.',
  },
});

export default contactLimiter;

