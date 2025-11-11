const { User, Role } = require("../models");

const findByEmail = (email) =>
  User.findOne({ where: { email }, include: Role });
const createUser = (data) => User.create(data);
const findById = (id_user) => User.findByPk(id_user, { include: Role });

module.exports = { findByEmail, createUser, findById };
