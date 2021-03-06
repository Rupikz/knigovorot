import dbQuery from '../db/dbQuery';
import config from '../config/config';
import {
  valid,
  isEmpty,
  generateUserToken,
} from '../helpers/validations';
import { updateString } from '../db/dbQueryString';


const updateUser = async (req, res) => {
  const {
    first_name: firstName, last_name: lastName, phone,
  } = req.body;

  if (isEmpty(firstName)) {
    req.flash('error_msg', 'Имя не введено');
  }

  if (isEmpty(lastName)) {
    req.flash('error_msg', 'Фамилия не введена');
  }

  if (isEmpty(phone)) {
    req.flash('error_msg', 'Телефон не введен');
  }

  const errorMsg = req.flash('error_msg');

  if (errorMsg.length) {
    return res.render('edit.hbs', { req, errorMsg });
  }

  const templates = ['first_name', 'last_name', 'phone'];

  const updateUserQuery = updateString(templates, 'id', req.user.id);

  const values = [
    valid(firstName),
    valid(lastName),
    valid(phone),
  ];

  try {
    const { rows } = await dbQuery.query(updateUserQuery, values);
    const dbResponse = rows[0];

    const token = generateUserToken(dbResponse.id, dbResponse.login,
      dbResponse.email, dbResponse.first_name, dbResponse.last_name, dbResponse.created_on,
      dbResponse.phone, dbResponse.id_image, dbResponse.books, dbResponse.admin);
    delete dbResponse.password;
    res.cookie('token', token, { maxAge: config.COOKIE_TIME, httpOnly: true });

    res.redirect(`/${req.user.login}`);
  } catch (error) {
    console.log('Ошибка в updateUsers:', error);
    if (error) {
      req.flash('error_msg', 'Что-то пошло не так');
    }
    return res.render('edit.hbs', { req, errorMsg: req.flash('error_msg') });
  }
};

const updateImage = async (req, res, next) => {
  const fileDownloaded = req.file;

  if (!fileDownloaded) {
    return next();
  }

  const templates = ['id_image'];

  const updateImageUserQuery = updateString(templates, 'id', req.user.id);

  const values = [
    fileDownloaded.filename,
  ];

  try {
    const { rows } = await dbQuery.query(updateImageUserQuery, values);
    const dbResponse = rows[0];

    const token = generateUserToken(dbResponse.id, dbResponse.login,
      dbResponse.email, dbResponse.first_name, dbResponse.last_name, dbResponse.created_on,
      dbResponse.phone, dbResponse.id_image, dbResponse.books, dbResponse.admin);
    delete dbResponse.password;
    res.cookie('token', token, { maxAge: config.COOKIE_TIME, httpOnly: true });

    return next();
  } catch (error) {
    console.log('Ошибка в updateUsers:', error);
    if (error) {
      req.flash('error_msg', 'Что-то пошло не так');
    }
    return res.render('edit.hbs', { req, errorMsg: req.flash('error_msg') });
  }
};

export {
  updateUser,
  updateImage,
};
