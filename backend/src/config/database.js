import mongoose from 'mongoose';
import dns from 'node:dns';

// Fix for Windows / ISP DNS resolving querySrv ETIMEOUT on MongoDB Atlas SRV records
try {
  dns.setServers(['8.8.8.8', '8.8.4.4', '1.1.1.1']);
} catch (dnsErr) {
  // Ignore in environments where custom DNS servers cannot be set
}

let isConnected = false;

export const connectDB = async () => {
  const mongoUri = process.env.MONGODB_URI;

  if (!mongoUri) {
    console.warn('[MongoDB] Warning: MONGODB_URI is not defined in environment variables. Database features will be unavailable until configured.');
    return false;
  }

  if (isConnected) {
    return true;
  }

  try {
    const conn = await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 5000, // Fail fast if offline
    });

    isConnected = conn.connections[0].readyState === 1;
    console.log(`[MongoDB] Connected successfully: ${conn.connection.host}`);
    return true;
  } catch (error) {
    if (error.message.includes('bad auth')) {
      console.error(`[MongoDB Authentication Error] Authentication failed for user in MONGODB_URI.`);
      console.warn(`[MongoDB Hint] Please check your username and password in MongoDB Atlas (under Database Access).`);
    } else if (error.message.includes('querySrv ETIMEOUT')) {
      console.error(`[MongoDB DNS Error] DNS timeout querying Atlas SRV record.`);
      console.warn(`[MongoDB Hint] Your ISP or network DNS timed out resolving SRV records.`);
    } else {
      console.error(`[MongoDB] Connection error: ${error.message}`);
    }
    console.warn('[MongoDB] The application will continue running in degraded mode (submissions will return appropriate server status).');
    isConnected = false;
    return false;
  }
};

export const getDBStatus = () => {
  return {
    isConnected: mongoose.connection.readyState === 1,
    readyState: mongoose.connection.readyState,
  };
};

export default connectDB;
