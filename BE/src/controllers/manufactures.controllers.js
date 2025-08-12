const manufacturesServices = require("../services/manufactures.services");
const { successResponse } = require("../utils/response");

exports.getAll = async (req, res, next) => {
  try {
    const { name, establisment, country } = req.query;
    const data = await manufacturesServices.getAll(name, establisment, country);
    successResponse(res, data);
  } catch (error) {
    next(error);
  }
};

exports.getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    // Konversi ID menjadi integer
    const data = await manufacturesServices.getById(parseInt(id));
    successResponse(res, data);
  } catch (error) {
    next(error);
  }
};

exports.create = async (req, res, next) => {
  try {
    const { body, files } = req;
    const data = await manufacturesServices.create(body, files);
    successResponse(res, data, 201);
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { body, files } = req;
    // Konversi ID menjadi integer
    const data = await manufacturesServices.update(parseInt(id), body, files);
    successResponse(res, data);
  } catch (error) {
    next(error);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const { id } = req.params;
    // Konversi ID menjadi integer
    const data = await manufacturesServices.delete(parseInt(id));
    successResponse(res, data);
  } catch (error) {
    next(error);
  }
};
