const { z } = require("zod");
const jwt = require("jsonwebtoken");
const {
  BadRequestError,
  UnauthorizedError,
  ForbiddenError,
} = require("../utils/request");
const userRepository = require("../repositories/user.repositories");

exports.authorization =
  (...roles) =>
  async (req, res, next) => {
    // get token from headers
    const authorizationHeader = req.headers["authorization"];
    if (!authorizationHeader) {
      throw new UnauthorizedError("You need to login!");
    }

    const token = authorizationHeader.split(" ")[1];
    if (!token) {
      throw new UnauthorizedError("Token is not found!");
    }

    // extract token to get payload
    const extractToken = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userRepository.getUserById(extractToken.user_id);
    const accessValidation = roles.includes(user.role_id);

    if (!accessValidation) {
      throw new ForbiddenError("You can't access this resource!");
    }

    req.user = user;
    
    next();
  };

exports.validateRegister = (req, res, next) => {
  // Validation body schema
  const validateBody = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
  });

  const validateFileBody = z
    .object({
      profile_picture: z
        .object({
          name: z.string(),
          data: z.any(),
        })
        .nullable()
        .optional(),
    })
    .nullable()
    .optional();

  const resultValidateBody = validateBody.safeParse(req.body);
  if (!resultValidateBody.success) {
    // If validation fails, return error messages
    throw new BadRequestError(resultValidateBody.error.errors);
  }

  const resultValidateFileBody = validateFileBody.safeParse(req.files);
  if (!resultValidateFileBody.success) {
    // If validation fails, return error messages
    throw new BadRequestError(resultValidateFileBody.error.errors);
  }

  next();
};

exports.validateLogin = (req, res, next) => {
  // Validation body schema
  const validateBody = z.object({
    name: z.string().nullable().optional(),
    email: z.string().email(),
    password: z.string(),
  });

  // Validate
  const resultValidateBody = validateBody.safeParse(req.body);
  if (!resultValidateBody.success) {
    // If validation fails, return error messages
    throw new BadRequestError(resultValidateBody.error.errors);
  }

  next();
};
