import express from 'express';
import searchController from '../controllers/search.controller';

const router = express.Router();

router.get('/users/:value', searchController.getUsers);

export default router;
