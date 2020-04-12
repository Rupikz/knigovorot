import express from 'express';
import dbQuery from '../db/dev/dbQuery';

const user = express.Router('/');

user.get('/', async (req, res) => {
  const loginUrl = req.originalUrl.slice(1);
  const selectUserQuery = 'SELECT id, first_name, last_name, created_on, phone, id_image, books FROM public.users WHERE login = $1';
  const values = [
    loginUrl,
  ];

  try {
    const { rows } = await dbQuery.query(selectUserQuery, values);
    const profile = rows[0];
    req.profile = profile;
    return res.render('user.hbs', { req });
  } catch (error) {
    console.log('Ошибка в отображении пользователя:', error);
    if (error) {
      req.flash('error_msg', 'Что-то пошло не так');
    }
    return res.render('user.hbs', { req, errorMsg: req.flash('error_msg') });
  }
});

export default user;
