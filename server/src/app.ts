import dotenv from 'dotenv';
import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import multer from 'multer';
import initDB from './models/init.model';
import index from './routes/index';
import initPassport from './passport/init';

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
app.use(upload.array('file[]'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(initPassport());

app.use('/', index);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 3000...');
});
