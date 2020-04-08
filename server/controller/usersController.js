import moment from 'moment';
import path from 'path';

import dbQuery from '../db/dev/dbQuery';
import config from '../config/config';
import vue from '../routes/vue';


import {
  hashPassword,
  comparePassword,
  isValidEmail,
  isValidLogin,
  validatePassword,
  isEmpty,
  generateUserToken,
} from '../helpers/validations';

import {
  errorMessage, successMessage, status,
} from '../helpers/status';


const createUser = async (req, res) => {
  const {
    email, login, password,
  } = req.body;

  const createdOn = moment(new Date());

  if (isEmpty(email) || isEmpty(login) || isEmpty(password)) {
    errorMessage.error = 'Email, password, first name and last name field cannot be empty'; // Заменить на флеш
    return res.status(status.bad).send(errorMessage);
  }
  if (!isValidEmail(email)) {
    errorMessage.error = 'Please enter a valid Email';
    return res.status(status.bad).send(errorMessage);
  }
  if (!validatePassword(password)) {
    errorMessage.error = 'Password must be more than five(5) characters';
    return res.status(status.bad).send(errorMessage);
  }
  const hashedPassword = hashPassword(password);

  const createUserQuery = `INSERT INTO
      users(email, login, password, created_on)
      VALUES($1, $2, $3, $4)
      returning *`;

  const values = [
    email,
    login,
    hashedPassword,
    createdOn,
  ];

  try {
    const { rows } = await dbQuery.query(createUserQuery, values);
    console.log(dbQuery);
    const dbResponse = rows[0];
    delete dbResponse.password;
    const token = generateUserToken(dbResponse.id, dbResponse.email, // исправить порядок или убрать
      dbResponse.login, dbResponse.admin);
    successMessage.data = dbResponse;
    successMessage.data.token = token;
    return res.status(status.created).send(successMessage);
  } catch (error) {
    if (error.routine === '_bt_check_unique') {
      errorMessage.error = 'User with that EMAIL or Login already exist';
      return res.status(status.conflict).send(errorMessage);
    }
    errorMessage.error = 'Operation was not successful';
    return res.status(status.error).send(errorMessage);
  }
};

const siginUser = async (req, res, next) => {
  const { login, password } = req.body;

  if (isEmpty(login) || isEmpty(password)) {
    req.flash('error_msg', 'Логин или пароль не введен');
  }

  if (!isValidLogin(login) || !validatePassword(password)) {
    req.flash('error_msg', 'Введите пароль больше 6 символов');
  }

  const signinUserQuery = 'SELECT * FROM users WHERE login = $1';
  const values = [login];

  try {
    const { rows } = await dbQuery.query(signinUserQuery, values);
    const dbResponse = rows[0];

    console.log('dbResponse', dbResponse);

    // if (!dbResponse) {
    //   errorMessage.error = 'User with this email does not exist';
    //   return res.status(status.notfound).send(errorMessage);
    // }

    // if (!comparePassword(dbResponse.password, password)) {
    //   errorMessage.error = 'The password you provided is incorrect';
    //   return res.status(status.bad).send(errorMessage);
    // }

    const errorMsg = req.flash('error_msg');

    if (errorMsg.length) {
      res.locals.errorMsg = errorMsg;
      // res.redirect('/login');
      // res.redirect('/', { errorMsg });
      // res.json(res.locals);
      res.sendFile(path.resolve(__dirname, '../public/index.html'), { errorMsg });
    } else {
      const token = generateUserToken(dbResponse.id, dbResponse.login,
        dbResponse.email, dbResponse.admin);

      delete dbResponse.password;
      successMessage.data = dbResponse;
      successMessage.data.token = token;
      res.cookie('token', token, { maxAge: config.COOKIE_TIME, httpOnly: true });
      return res.status(status.success).send(successMessage);
    }
  } catch (error) {
    console.log(error);
    errorMessage.error = 'Operation was not successful';
    return res.status(status.error).send(errorMessage);
  }
};

const usersController = (req, res) => {
  if (req.body.operation === 'create-user') {
    return createUser(req, res);
  }

  if (req.body.operation === 'signin-user') {
    return siginUser(req, res);
  }

  errorMessage.error = 'Нет параметра запроса';
  return res.status(status.error).send(errorMessage);
};

export default usersController;
