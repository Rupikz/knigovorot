import moment from 'moment';

import dbQuery from '../db/dbQuery';
import config from '../config/config';


import {
  hashPassword,
  comparePassword,
  isValidEmail,
  // valid, использовать валидацию
  isValidatePassword,
  isEmpty,
  generateUserToken,
} from '../helpers/validations';


const createUser = async (req, res) => {
  const {
    email, login, password,
  } = req.body;

  const createdOn = moment(new Date());

  if (isEmpty(email)) {
    req.flash('error_msg', 'Почта не введена');
  }

  if (isEmpty(login)) {
    req.flash('error_msg', 'Логин не введен');
  }

  if (isEmpty(password)) {
    req.flash('error_msg', 'Пароль не введен');
  }

  if (!isValidEmail(email)) {
    req.flash('error_msg', 'Почта не корректа');
  }

  if (!isValidatePassword(password)) {
    req.flash('error_msg', 'Пароль должен быть больше 6 символов');
  }

  const errorMsg = req.flash('error_msg');

  if (errorMsg.length) {
    res.render('login.hbs', { errorMsg });
  }

  const hashedPassword = hashPassword(password);
  // const login = validLogin(login); // сделать валидацию логина

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

    if (rows[0]) {
      req.flash('success_msg', 'Аккаунт успешно создан, войдите');
    }

    const successMsg = req.flash('success_msg');

    res.render('login.hbs', { successMsg });
  } catch (error) {
    console.log(error);
    if (error.constraint === 'users_email_key') {
      req.flash('error_msg', 'Аккаунт с такой почтой уже существует');
    }

    if (error.constraint === 'users_login_key') {
      req.flash('error_msg', 'Аккаунт с таким логином уже существует');
    }

    res.render('login.hbs', { errorMsg: req.flash('error_msg') });
  }
};

const siginUser = async (req, res, next) => {
  const { login, password } = req.body;

  if (isEmpty(login) || isEmpty(password)) {
    req.flash('error_msg', 'Логин или пароль не введен');
  }

  if (!isValidatePassword(password)) {
    req.flash('error_msg', 'Введите пароль больше 6 символов');
  }

  const signinUserQuery = 'SELECT * FROM users WHERE login = $1';
  const values = [login];

  try {
    const { rows } = await dbQuery.query(signinUserQuery, values);
    const dbResponse = rows[0];

    // console.log('dbResponse', dbResponse);

    if (!dbResponse) {
      req.flash('error_msg', 'Неправильный логин или пароль');
    } else if (!comparePassword(dbResponse.password, password)) {
      req.flash('error_msg', 'Неправильный логин или пароль');
    }

    const errorMsg = req.flash('error_msg');

    if (errorMsg.length) {
      res.render('login.hbs', { errorMsg });
    } else {
      const token = generateUserToken(dbResponse.id, dbResponse.login,
        dbResponse.email, dbResponse.first_name, dbResponse.last_name, dbResponse.created_on,
        dbResponse.phone, dbResponse.id_image, dbResponse.books, dbResponse.admin);
      delete dbResponse.password;
      res.cookie('token', token, { maxAge: config.COOKIE_TIME, httpOnly: true });
      res.redirect('/');
    }
  } catch (error) {
    console.log('Ошибка входа в аккаунт', error);
    next();
  }
};

const usersController = (req, res) => {
  if (req.body.operation === 'create-user') {
    return createUser(req, res);
  }

  if (req.body.operation === 'signin-user') {
    return siginUser(req, res);
  }

  const errorMsg = 'Нет параметра запроса';
  res.render('login.hbs', { errorMsg });
};

export default usersController;
