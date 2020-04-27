import express from 'express';
import dbQuery from '../db/dbQuery';

const user = express.Router('/');

user.get('/', async (req, res, next) => {
  const loginUrl = req.originalUrl.slice(1);
  const selectUserQuery = 'SELECT id, login, first_name, last_name, created_on, phone, id_image FROM public.users WHERE login = $1';
  const valuesUser = [
    loginUrl,
  ];
  const selectUserBooksQuery = 'SELECT id, name_book, author_book, price, id_image_book FROM public.books WHERE id_user = $1';
  try {
    const userRows = await dbQuery.query(selectUserQuery, valuesUser);
    const profile = userRows.rows[0];
    const booksRows = await dbQuery.query(selectUserBooksQuery, [profile.id]);
    const userBooks = booksRows.rows || false;
    let isYou = false;

    if (!profile) {
      return next();
    }

    if (profile.login === req.user.login) {
      isYou = true;
    }

    req.profile = profile;
    return res.render('user.hbs', { req, books: userBooks, isYou });
  } catch (error) {
    // console.log('Ошибка в отображении пользователя:', error);
    // if (error) {
    //   req.flash('error_msg', 'Что-то пошло не так');
    // }
    // return res.render('user.hbs', { req, errorMsg: req.flash('error_msg') });
    return next();
  }
});

export default user;
