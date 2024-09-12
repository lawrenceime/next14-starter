import mongoose from 'mongoose';

const connection = {
  isConnected: 0, // Initialize to 0 (disconnected)
};

export const connectDb = async () => {
  // If already connected, just return
  if (connection.isConnected) {
    console.log('Already connected to MongoDB');
    return;
  }

  try {
    // Establish a new connection
    const db = await mongoose.connect(process.env.MONGO_URI); // Deprecated options removed

    connection.isConnected = db.connections[0].readyState;
    
    if (connection.isConnected === 1) {
      console.log('Connected to MongoDB');
    }
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    throw new Error('Database connection error');
  }

  // Log connection status for debugging
  mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to MongoDB');
  });

  mongoose.connection.on('error', (err) => {
    console.error('Mongoose connection error:', err.message);
  });

  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected from MongoDB');
  });
};
