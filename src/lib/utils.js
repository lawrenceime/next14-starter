import mongoose from 'mongoose';

const connection = {}


 export  const connectDb = async() => {
    try {
        const db = await mongoose.connect(process.env.MONGO_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        connection.isConnected = db.connections[0].readyState;
        console.log('Connected to MongoDB');
      } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        throw new Error('Database connection error');
      }
}