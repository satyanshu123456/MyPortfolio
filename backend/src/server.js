import dns from 'node:dns';
dns.setDefaultResultOrder('ipv4first');
dns.setServers(['8.8.8.8','8.8.4.4']);

import dotenv from 'dotenv';
dotenv.config();

import app from './app.js';
import { connectDB } from './config/database.js';

const DEFAULT_PORT = parseInt(process.env.PORT || '5000', 10);

// Connect to MongoDB
connectDB().catch((err) => {
  console.error('[Server] Initial MongoDB connection error:', err.message);
});

// Start server with robust EADDRINUSE handling
const startServer = (port) => {
  const server = app.listen(port, () => {
    console.log(`\n==================================================`);
    console.log(`🚀 SATYANSHU.DEV API Server running successfully!`);
    console.log(`📡 Local Port:    http://localhost:${port}`);
    console.log(`🩺 Health Check:  http://localhost:${port}/api/health`);
    console.log(`✉️  Contact API:   http://localhost:${port}/api/contact`);
    console.log(`==================================================\n`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.error(`\n[Server Error] Port ${port} is currently in use.`);
      console.warn(`[Server] Attempting fallback to port ${port + 1}...`);
      startServer(port + 1);
    } else {
      console.error('[Server Error]', err);
    }
  });

  // Graceful shutdown handling
  const shutdown = () => {
    server.close(() => {
      console.log('[Server] HTTP server closed gracefully.');
    });
  };

  process.once('SIGTERM', shutdown);
  process.once('SIGINT', shutdown);

  return server;
};

startServer(DEFAULT_PORT);

process.on('unhandledRejection', (reason, promise) => {
  console.error('[Server] Unhandled Rejection at:', promise, 'reason:', reason);
});
