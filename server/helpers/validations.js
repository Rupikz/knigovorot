import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../config/config';
// import {
//   errorMessage, status,
// } from './status';

const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
const hashPassword = (password) => bcrypt.hashSync(password, salt);

const comparePassword = (hashedPassword, password) => bcrypt.compareSync(password, hashedPassword);

const isValidEmail = (email) => {
  const regEx = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return regEx.test(String(email).toLowerCase());
};

const isValidLogin = (login) => String(login).toLowerCase().trim(); // Доделать
const validatePassword = (password) => {
  if (password.length <= 5 || password === '') {
    return false;
  }

  return true;
};

const isEmpty = (input) => {
  if (input === undefined || input === '') {
    return true;
  }

  if (input.replace(/\s/g, '').length) {
    return false;
  }

  return true;
};

const generateUserToken = (id, login, email, firstName, lastName, admin) => {
  console.log('generator', firstName, lastName);
  const token = jwt.sign({
    id,
    login,
    email,
    first_name: firstName,
    last_name: lastName,
    admin,
  },
  config.SECRET_JWT, { expiresIn: '3d' });
  return token;
};

const generateAdminToken = (email, id, isAdmin) => {
  const token = jwt.sign({
    admin_email: email,
    admin_id: id, // тут тоже что-то поменять
    is_admin: isAdmin,
  },
  config.SECRET_JWT, { expiresIn: '3d' });
  return token;
};

export {
  hashPassword,
  comparePassword,
  isValidEmail,
  isValidLogin,
  validatePassword,
  isEmpty,
  generateUserToken,
  generateAdminToken,
};
