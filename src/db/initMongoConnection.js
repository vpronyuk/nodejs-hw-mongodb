import mongoose from 'mongoose';
import { env } from '../utils/env.js';

async function initMongoConnection() {
  try {
    // const DB_URI = process.env.DB_URI;
    const user = env('MONGODB_USER');
    const password = env('MONGODB_PASSWORD');
    const url = env('MONGODB_URL');
    const db = env('MONGODB_DB');

    await mongoose.connect(
      `mongodb+srv://${user}:${password}@${url}/${db}?retryWrites=true&w=majority`,
    );

    console.log('Database connection successfully');
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export { initMongoConnection };
