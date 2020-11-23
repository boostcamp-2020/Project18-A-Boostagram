/* eslint-disable no-console */
import dotenv from 'dotenv';
import express from 'express';
import logger from 'morgan';
import mongoose from 'mongoose';
import index from './routes/index';

dotenv.config();

const port = process.env.PORT || 3000;
const DB_PATH = process.env.DB_PATH || 'err';

if (DB_PATH === 'err') {
  throw new Error('DB_PATH not exists');
}

mongoose.connect(
  DB_PATH,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log('database connected...');
  },
);

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', index);

app.listen(port, () => {
  console.log('listening on port 3000...');
});
