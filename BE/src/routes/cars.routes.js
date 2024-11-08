const express = require("express");
const {
    validateGetCars,
    validateGetCarById,
    validateDeleteCarById,
    validateCreateCar,
    validateUpdateCar,
} = require("../middlewares/cars.middlewares");
const {
    getCars,
    getCarById,
    deleteCarById,
    createCar,
    updateCar,
} = require("../controllers/cars.controllers");
const { authorization } = require("../middlewares/auth.middleware");

const router = express.Router();

router.get("/", authorization(1,2), validateGetCars, getCars);
router.post("/", authorization(1), validateCreateCar, createCar);
router.get("/:id", authorization(1,2), validateGetCarById, getCarById);
router.put("/:id", authorization(1), validateUpdateCar, updateCar);
router.delete(
  "/:id",
  authorization(1),
  validateDeleteCarById,
  deleteCarById
);

module.exports = router;
