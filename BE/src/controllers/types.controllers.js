const { successResponse } = require("../utils/response");
const typeService = require("../services/types.services");

exports.getTypes = async (req, res, next) => {
  try {
    const type = req.query?.type || null;
    const data = await typeService.getTypes(type);
    successResponse(res, data);
  } catch (error) {
    next(error);
  }
};

exports.getTypeById = async (req, res, next) => {
  try {
    const { id } = req.params;
    // Konversi ID menjadi integer
    const data = await typeService.getTypeById(parseInt(id));
    successResponse(res, data);
  } catch (error) {
    next(error);
  }
};

exports.createType = async (req, res, next) => {
  try {
    const data = await typeService.createType(req.body);
    successResponse(res, data);
  } catch (error) {
    next(error);
  }
};

exports.updateType = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await typeService.updateType(
      parseInt(id),
      req.body,
      req.files
    );
    successResponse(res, data);
  } catch (error) {
    next(error);
  }
};

exports.deleteTypeById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await typeService.deleteTypeById(parseInt(id));
    successResponse(res, data);
  } catch (error) {
    next(error);
  }
};
