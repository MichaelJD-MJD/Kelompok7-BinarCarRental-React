const express = require("express");
const {
  validateGetTypes,
  validateGetTypeById,
  validateDeleteTypeById,
  validateCreateType,
  validateUpdateType,
} = require("../middlewares/types.middlewares");
const {
  getTypes,
  getTypeById,
  deleteTypeById,
  createType,
  updateType,
} = require("../controllers/types.controllers");
const { authorization } = require("../middlewares/auth.middleware");

const router = express.Router();

router
  .route("/")
  .get(authorization(1, 2), validateGetTypes, getTypes)
  .post(authorization(1), validateCreateType, createType);

router
  .route("/:id")
  .get(authorization(1, 2), validateGetTypeById, getTypeById)
  .put(authorization(1), validateUpdateType, updateType)
  .delete(authorization(1), validateDeleteTypeById, deleteTypeById);

module.exports = router;
