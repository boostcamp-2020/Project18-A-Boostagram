import { Request, Response, NextFunction } from 'express';
import { indexService } from '../services';

const indexController = (req: Request, res: Response, next: NextFunction) => {
  res.send(indexService());
};

export { indexController };
