const jwt = require("jsonwebtoken");
const userRepository = require("../repositories/user.repositories");
const { imageUpload } = require("../utils/image-kit");
const { NotFoundError, UnauthorizedError } = require("../utils/request");

exports.register = async (data, file) => {
  if (file?.profile_picture) {
    data.profile_picture = await imageUpload(file.profile_picture);
  }

  // create user
  const user = await userRepository.createUser(data);
  if(!user){
    throw new UnauthorizedError("Email is already registered");
  }

  // generate token
  const token = generateToken(user);

  return {
    user,
    token,
  };
};

exports.login = async (data) => {
  const user = await userRepository.loginUser(data);
  if (!user) {
    throw new UnauthorizedError("Email or Password is incorect");
  }

  const token = generateToken(user);

  return {
    user,
    token,
  };
};

generateToken = (user) => {
  const payload = {
    user_id: user.id,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "72h", // expired in 3 days
  });

  delete user.password;

  return token;
};
