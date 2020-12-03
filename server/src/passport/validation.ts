import { Request, Response, NextFunction } from 'express';
import passport from 'passport';

const passportJWTAuth = (req: Request, res: Response, next: NextFunction) =>
  passport.authenticate('jwt', { session: false }, (err, user) => {
    if (err) return next(err);
    if (!user) return res.status(401).end();
    req.user = user;
    return next();
  })(req, res, next);

export default passportJWTAuth;
