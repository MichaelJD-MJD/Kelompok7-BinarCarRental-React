const { PrismaClient } = require("@prisma/client");
const JSONBigInt = require("json-bigint");
const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

exports.createUser = async(data) => {
  // cek apakah email sudah terdaftar
  const user = await prisma.users.findFirst({
    where: {
      email: data.email,
    },
  });
  if(user){
    return null;
  }

  // enkripsi password
  const saltRounds = 10;
  data.password = await bcrypt.hash(data.password, saltRounds);

  // create new user
  const newUser = await prisma.users.create({
    data,
  });

  // Convert BigInt fields to string for safe serialization
  const serializedUsers = JSONBigInt.stringify(newUser);
  return JSONBigInt.parse(serializedUsers);
}

exports.loginUser = async(data) => {
  // cari email user apakah sudah terdaftar
  let user = await prisma.users.findFirst({
    where: {
      email: data.email,
    },
  });

  if (!user) {
    return user;
  }

  // bandingkan passwordnya
  const valid = await bcrypt.compare(data.password, user.password);
  if (!valid) {
    user = null;
  }

  // Convert BigInt fields to string for safe serialization
  const serializedUsers = JSONBigInt.stringify(user);
  return JSONBigInt.parse(serializedUsers);
}

exports.getUserById = async (id) => {
  // find User by id
  const user = await prisma.users.findFirst({
    where: {
      id: id,
    }
  });

  // Convert BigInt fields to string for safe serialization
  const serializedUsers = JSONBigInt.stringify(user);
  return JSONBigInt.parse(serializedUsers);
};

