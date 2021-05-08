import { Students } from './../db/models';

export async function createStudents(req, res, next) {
  try {
    const created_students = await Students.create(req.body);
    return next(new Error());
  } catch (e) {
    next(e);
  }
}

export async function updateStudents(req, res, next) {
  try {
    const [updateRowsCount, updateRows] = await Students.update(req.body, {
      where: {
        id: req.params.studentsId,
      },
      returning: true,
    });
    if (updateRowsCount) {
      return res.status(201).send(updateRows[0]);
    }
    return next(new Error());
  } catch (e) {
    next(e);
  }
}

export async function getStudents(req, res, next) {
  try {
    const found_students = await Students.findByPk(req.params.studentsId);
    if (found_students) {
      return res.status(201).send(found_students);
    }
    return next(new Error());
  } catch (e) {
    next(e);
  }
}

export async function deleteStudents(req, res, next) {
  try {
    const found_students = await Students.destroy({
      where: {
        id: req.params.studentsId,
      },
    });
    if (found_students) {
      return res.status(201).send(found_students);
    }
    return next(new Error());
  } catch (e) {
    next(e);
  }
}
