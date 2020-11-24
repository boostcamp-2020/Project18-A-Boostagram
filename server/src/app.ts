/* eslint-disable no-console */
import dotenv from 'dotenv';
import express from 'express';
import logger from 'morgan';
import initDB from './models/init';
import index from './routes/index';

dotenv.config();

const port = process.env.PORT || 3000;

initDB();

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', index);

app.listen(port, () => {
  console.log('listening on port 3000...');
});
