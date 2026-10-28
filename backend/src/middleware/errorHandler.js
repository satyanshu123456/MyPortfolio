/**
 * Centralized error handling middleware.
 * Ensures consistent JSON responses and protects internal errors from leaking.
 */
export const errorHandler = (err, req, res, next) => {
  // If headers already sent, delegate to default Express handler
  if (res.headersSent) {
    return next(err);
  }

  const statusCode = err.statusCode || 500;
  const isDev = process.env.NODE_ENV === 'development';

  console.error('[ServerError]', {
    path: req.originalUrl,
    method: req.method,
    message: err.message,
    stack: isDev ? err.stack : undefined,
  });

  return res.status(statusCode).json({
    success: false,
    message: err.isOperational ? err.message : 'An unexpected error occurred. Please try again later.',
    ...(isDev && { error: err.message, stack: err.stack }),
  });
};

/**
 * Custom application operational error class.
 */
export class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

export default errorHandler;

