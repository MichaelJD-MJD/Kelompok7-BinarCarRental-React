const express = require("express");
const { validateRegister, validateLogin, authorization } = require("../middlewares/auth.middleware");
const { register, login, getProfile } = require("../controllers/auth.controllers");

const router = express.Router();

router.use("/register", validateRegister, register);
router.use("/login", validateLogin, login);
router.use("/profile", authorization(1, 2), getProfile);

module.exports = router;