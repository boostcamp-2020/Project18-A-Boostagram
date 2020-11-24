import express from 'express';
import db from '../models';

const router = express.Router();

router.get('/', (req, res) => {
  db.Feed.create({ content: 'bye22222222' }, (err, user) => {
    console.log(err, user);
  });
});

export default router;
