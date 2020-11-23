import express from 'express';
import User from '../models/user';

const router = express.Router();

router.get('/', (req, res) => {
  User.create({ name: 'hi' }, (err, user) => {
    console.log(err, user);
  });
});

export default router;
