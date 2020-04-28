import express from 'express';
import dbQuery from '../db/dbQuery';

const books = express.Router('/');

books.get('/', async (req, res) => {
  const selectArtGenresQuery = 'SELECT * FROM public.genres WHERE art = \'yes\'';
  const selectNoArtGenresQuery = 'SELECT * FROM public.genres WHERE art = \'no\'';
  const selectPublisherQuery = 'SELECT * FROM public.publisher';
  const selectCountBooks = 'SELECT COUNT(*) FROM public.books';
  const countPages = req.query.pages || 1;

  const createPagination = (pages, allCountBooks) => {
    const allPages = allCountBooks / 5;
    const paginationDefault = {
      previous: false,
      next: true,
      active: 2,
      pages,
    };
    let pagesVisible;
    if (pages < 2) {
      pagesVisible = [1, 2, 3, 4, 5];
      paginationDefault.active = pages;
    } else if (allPages - pages < 2) {
      pagesVisible = [allPages - 2, allPages - 1, allPages, allPages + 1, allPages + 2];
      // остановился тут, формирование строк
      // сори придумать лучше не могу
      paginationDefault.next = false;
      paginationDefault.previous = true;
    } else {
      pagesVisible = [allPages - 4, allPages - 3, allPages - 2, allPages - 1, allPages];
      paginationDefault.previous = true;
      paginationDefault.previous = false;
    }

    paginationDefault.pages = pagesVisible;
    return paginationDefault;
  };

  let selectBooksQuery;
  if (req.query.genres) {
    selectBooksQuery = `SELECT * FROM public.books WHERE genre_id=${req.query.genres} LIMIT 5 OFFSET ${countPages}`;
  } else if (req.query.publisher) {
    selectBooksQuery = `SELECT * FROM public.books WHERE publisher_id=${req.query.publisher} LIMIT 5 OFFSET ${countPages}`;
  } else {
    selectBooksQuery = `SELECT * FROM public.books LIMIT 5 OFFSET ${countPages}`;
  }

  try {
    const rowsGenresArt = await dbQuery.query(selectArtGenresQuery);
    const genresArt = rowsGenresArt.rows;
    const rowsGenresNoArt = await dbQuery.query(selectNoArtGenresQuery);
    const genresNoArt = rowsGenresNoArt.rows;
    const rowsPublisher = await dbQuery.query(selectPublisherQuery);
    const publisher = rowsPublisher.rows;
    const rowsBooks = await dbQuery.query(selectBooksQuery);
    const booksBd = rowsBooks.rows;
    const rowsCount = await dbQuery.query(selectCountBooks);
    const booksCount = rowsCount.rows[0].count;
    console.log(createPagination(countPages, booksCount));

    return res.render('books.hbs', {
      req, genresArt, genresNoArt, publisher, booksBd, countPages,
    });
  } catch (error) {
    console.log('Ошибка в загрузке жанров из бд:', error);
    return res.render('notfound.hbs');
  }
});

export default books;
