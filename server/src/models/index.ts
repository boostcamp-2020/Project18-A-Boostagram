/* eslint-disable no-console */
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import './user';
import './feed';
import './dm';

function connectMongoose(): void {
  dotenv.config();
  const DB_PATH = process.env.DB_PATH || 'err';

  mongoose.connect(
    DB_PATH,
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) {
        return console.error('database connection error', err);
      }
      return console.log('database connected...');
    },
  );
}

function connectCollections(): void {
  connectMongoose();
  mongoose.connection.on('disconnected', connectMongoose);
}

export default connectCollections;
