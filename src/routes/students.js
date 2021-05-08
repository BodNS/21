import express from 'express';
import {
  createStudents,
  deleteStudents,
  updateStudents,
  getStudents,
} from '../controllers/students';
import validationMV from '../middlewares/validation/validationMV.js';
import { ACTION } from '../constants';
import schemas from '../utils/validation';

const taskRouter = express.Router();

const createStudentsValidationMV = validationMV(schemas.Schema);

studentsRouter.post('/', createStudentsValidationMV(ACTION.CREATE), createStudents);

studentsRouter.patch('/:studentsId', createStudentsValidationMV(ACTION.UPDATE), updateStudents);

studentsRouter.get('/:studentsId', createStudentsValidationMV(ACTION.READ), getStudents);

studentsRouter.delete(
  '/:studentsId',  createStudentsValidationMV(ACTION.DELETE),   deleteStudents);

export default studentsRouter;
