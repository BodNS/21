import express from 'express';
import {
  createGroupp,
  deleteGroupp,
  updateGroupp,
  getGroupp,
} from '../controllers/groupp';
import validationMV from '../middlewares/validation/validationMV.js';
import { ACTION } from '../constants';
import schemas from '../utils/validation';

const taskRouter = express.Router();

const createGrouppValidationMV = validationMV(schemas.grouppSchema);

grouppRouter.post('/', createGrouppValidationMV(ACTION.CREATE), createGroupp);

grouppRouter.patch('/:grouppId', createGrouppValidationMV(ACTION.UPDATE), updateGroupp);

grouppRouter.get('/:grouppId', createGrouppValidationMV(ACTION.READ), getGroupp);

grouppRouter.delete(
  '/:grouppId',
  createTaskValidationMV(ACTION.DELETE),
  deleteGroupp
);

export default grouppRouter;
