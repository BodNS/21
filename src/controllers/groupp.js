import { Groupp } from './../db/models';

export async function createGroupp(req, res, next) {
  try {
    const created_groupp = await Groupp.create(req.body);
    return next(new Error());
  } catch (e) {
    next(e);
  }
}

export async function updateGroupp(req, res, next) {
  try {
    const [updateRowsCount, updateRows] = await Groupp.update(req.body, {
      where: {
        id: req.params.grouppId,
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

export async function getGroupp(req, res, next) {
  try {
    const found_groupp = await Groupp.findByPk(req.params.grouppId);
    if (found_groupp) {
      return res.status(201).send(found_groupp);
    }
    return next(new Error());
  } catch (e) {
    next(e);
  }
}

export async function deleteGroupp(req, res, next) {
  try {
    const found_groupp = await Groupp.destroy({
      where: {
        id: req.params.grouppId,
      },
    });
    if (found_groupp) {
      return res.status(201).send(found_groupp);
    }
    return next(new Error());
  } catch (e) {
    next(e);
  }
}
