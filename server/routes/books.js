import express from 'express';
import dbQuery from '../db/dbQuery';

const books = express.Router('/');

books.get('/', async (req, res) => {
  const selectArtGenresQuery = 'SELECT * FROM public.genres WHERE art = \'yes\'';
  const selectNoArtGenresQuery = 'SELECT * FROM public.genres WHERE art = \'no\'';
  const selectPublisherQuery = 'SELECT * FROM public.publisher';
  const selectBooksQuery = 'SELECT * FROM public.books LIMIT 20';

  try {
    const rowsGenresArt = await dbQuery.query(selectArtGenresQuery);
    const genresArt = rowsGenresArt.rows;
    const rowsGenresNoArt = await dbQuery.query(selectNoArtGenresQuery);
    const genresNoArt = rowsGenresNoArt.rows;
    const rowsPublisher = await dbQuery.query(selectPublisherQuery);
    const publisher = rowsPublisher.rows;
    const rowsBooks = await dbQuery.query(selectBooksQuery);
    const booksBd = rowsBooks.rows;

    return res.render('books.hbs', {
      req, genresArt, genresNoArt, publisher, booksBd,
    });
  } catch (error) {
    console.log('Ошибка в загрузке жанров из бд:', error);
    return res.render('notfound.hbs');
  }
});

export default books;
