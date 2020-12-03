import express from 'express';
import loginController from '../controllers/login.controller';

const router = express.Router();

router.get('/github', loginController.gitUrl);
router.get('/callback', loginController.gitCallback);

export default router;
