/* eslint-disable no-console */
import dotenv from 'dotenv';
import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import multer from 'multer';
import initDB from './models/init.model';
import index from './routes/index';

dotenv.config();

const port = process.env.PORT || 3000;
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads/');
  },
  filename: (req, file, callback) => {
    callback(null, `${new Date().getTime()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

initDB();

const app = express();
app.use(cors());
app.use(logger('dev'));
app.use(upload.single('file'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', index);

app.listen(port, () => {
  console.log('listening on port 3000...');
});
