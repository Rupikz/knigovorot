import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../config/config';

const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
const hashPassword = (password) => bcrypt.hashSync(password, salt);

const comparePassword = (hashedPassword, password) => bcrypt.compareSync(password, hashedPassword);

const isValidEmail = (email) => {
  const indexDog = email.indexOf('@');
  if (indexDog < 0) return false;
  const emailBefore = email.slice(0, indexDog);
  const emailAfter = email.slice(indexDog + 1);
  const reg = new RegExp(/[,:;"'{[}\]*+|<>?$%^&=@!\\/\\]/g);
  return !reg.test(emailBefore) && !reg.test(emailAfter);
};

const valid = (str) => String(str).trim().replace(/<[^>]+>/g, '').replace(/[><;'"]/g, '');

const isValidatePassword = (password) => !(password.length <= 5 || password === '');

const isEmpty = (input) => {
  if (input === undefined || input === '') {
    return true;
  }

  if (input.trim().replace(/\s/g, '').length) {
    return false;
  }

  return true;
};

const generateUserToken = (id, login, email, firstName, lastName,
  createdOn, phone, idImage, books, admin) => {
  const token = jwt.sign({
    id,
    login,
    email,
    first_name: firstName,
    last_name: lastName,
    created_on: createdOn,
    phone,
    id_image: idImage,
    books,
    admin,
  },
  config.SECRET_JWT, { expiresIn: '3d' });
  return token;
};

const generateAdminToken = (email, id, isAdmin) => {
  const token = jwt.sign({
    admin_email: email,
    admin_id: id,
    is_admin: isAdmin,
  },
  config.SECRET_JWT, { expiresIn: '3d' });
  return token;
};

export {
  hashPassword,
  comparePassword,
  isValidEmail,
  valid,
  isValidatePassword,
  isEmpty,
  generateUserToken,
  generateAdminToken,
};
