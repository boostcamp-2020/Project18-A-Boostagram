import dotenv from 'dotenv';
dotenv.config();
import express, {Request, Response, NextFunction} from 'express';
import logger from 'morgan';
import index from './routes';
import mongoose from 'mongoose';

const port = process.env.PORT || 3000;
const DB_PATH = process.env.DB_PATH || 'err';

if (DB_PATH === 'err') {
  throw new Error('DB_PATH not exists');
} 

mongoose.connect(DB_PATH, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, () => {
  console.log('database connected...');
})


const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', index);

app.listen(port, () => {
  console.log('listening on port 3000...');
});
