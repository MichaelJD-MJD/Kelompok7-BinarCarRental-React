const express = require("express");
const {
  validateGetAll,
  validateGetById,
  validateCreate,
  validateUpdate,
  validateDelete,
} = require("../middlewares/manufactures.middlewares");
const {
  getAll,
  getById,
  create,
  update,
  delete: deleteManufacture,
} = require("../controllers/manufactures.controllers");
const { authorization } = require("../middlewares/auth.middleware");

const router = express.Router();

router
  .route("/")
  .get(authorization(1, 2), validateGetAll, getAll)
  .post(authorization(1), validateCreate, create);

router
  .route("/:id")
  .get(authorization(1, 2), validateGetById, getById)
  .put(authorization(1), validateUpdate, update)
  .delete(authorization(1), validateDelete, deleteManufacture);

module.exports = router;
