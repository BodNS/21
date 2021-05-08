import express from 'express';
import studentsRouter from './students.js';
import grouppRouter from './groupp.js';
import errorHandler from '../middlewares/errorHandler.js';

const router = express.Router();

router.use('/students', studentsRouter);

router.use('/groupp', grouppRouter);

router.use(errorHandler);

export default router;
