import express from 'express';
import dbQuery from '../db/dbQuery';

const user = express.Router('/');

user.get('/', async (req, res) => {
  const likeBooks = req.cookies.likes;
  let sectionBooks = '';
  console.log(likeBooks);
  const selectBooksQuery = `SELECT * FROM public.books WHERE id in (${likeBooks}) ORDER BY id DESC`;
  try {
    if (likeBooks) {
      const rowsSectionBooks = await dbQuery.query(selectBooksQuery);
      sectionBooks = rowsSectionBooks.rows;
    }

    return res.render('likes.hbs', { req, sectionBooks });
  } catch (error) {
    console.log('Ошибка на странице лайков:', error);
    return res.render('notfound.hbs');
  }
});

export default user;
