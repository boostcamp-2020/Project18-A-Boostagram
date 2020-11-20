import express, {Request, Response, NextFunction} from 'express';
import logger from 'morgan';
import index from './routes';

const port = process.env.PORT || 3000;

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', index);

app.listen(port, () => {
  console.log('listening on port 3000...');
});
