import passport from 'passport';
import passportJWT from 'passport-jwt';

const JWTStrategy = passportJWT.Strategy;
const extractJWT = passportJWT.ExtractJwt;

const initPassport = (): any => {
  const JWTOption = {
    jwtFromRequest: extractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
  };

  passport.serializeUser((user, done) => {
    done(null, user);
  });
  passport.deserializeUser((user, done) => {
    done(null, user);
  });
  passport.use(
    new JWTStrategy(JWTOption, (payload, done) => {
      const { id } = payload;
      const user = { id };
      if (!user) return done(null, undefined);
      return done(null, user);
    }),
  );
  return passport.initialize();
};

export default initPassport;
