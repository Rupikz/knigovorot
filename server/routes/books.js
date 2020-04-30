import express from 'express';
import dbQuery from '../db/dbQuery';

const books = express.Router('/');

books.get('/', async (req, res) => {
  const selectArtGenresQuery = 'SELECT * FROM public.genres WHERE art = \'yes\'';
  const selectNoArtGenresQuery = 'SELECT * FROM public.genres WHERE art = \'no\'';
  const selectPublisherQuery = 'SELECT * FROM public.publisher';
  const selectCountBooks = 'SELECT COUNT(*) FROM public.books';
  const numberPages = Number(req.query.pages || 1);

  const createPagination = (pages, allCountBooks) => {
    const maxPages = Math.ceil(allCountBooks / 5);
    const paginationMenu = {
      chevronLeft: {
        page: pages - 3,
        active: pages >= 3,
      },
      chevronRight: {
        page: pages + 3,
        active: maxPages - pages > 3,
      },
    };

    const pagination = [];
    for (let i = pages; i < pages + 5; i += 1) {
      if (maxPages - pages < 3) {
        if (pages === maxPages - 2) {
          pagination.push({
            page: i - 1,
            active: i - 1 === pages,
          });
        } else if (pages === maxPages - 1) {
          pagination.push({
            page: i - 2,
            active: i - 2 === pages,
          });
        } else {
          pagination.push({
            page: i - 3,
            active: i - 3 === pages,
          });
        }
      } else if (pages <= 3) {
        if (pages === 1) {
          pagination.push({
            page: i,
            active: i === pages,
          });
        } else if (pages === 2) {
          pagination.push({
            page: i - 1,
            active: i - 1 === pages,
          });
        } else {
          pagination.push({
            page: i - 2,
            active: i - 2 === pages,
          });
        }
      } else {
        pagination.push({
          page: i - 3,
          active: i === pages,
        });
      }
    }
    if (maxPages < 5) {
      for (let i = 0; i < 5 - maxPages; i += 1) {
        pagination.pop();
      }
    }
    paginationMenu.pagination = pagination;
    return paginationMenu;
  };

  let selectBooksQuery;
  if (req.query.genres) {
    selectBooksQuery = `SELECT * FROM public.books WHERE genre_id=${req.query.genres} LIMIT 5 OFFSET ${(numberPages - 1) * 5}`;
  } else if (req.query.publisher) {
    selectBooksQuery = `SELECT * FROM public.books WHERE publisher_id=${req.query.publisher} LIMIT 5 OFFSET ${(numberPages - 1) * 5}`;
  } else {
    selectBooksQuery = `SELECT * FROM public.books LIMIT 5 OFFSET ${(numberPages - 1) * 5}`;
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
    const paginationMenu = createPagination(numberPages, booksCount);
    console.log(paginationMenu); // Лог вывода книг (books)
    return res.render('books.hbs', {
      req, genresArt, genresNoArt, publisher, booksBd, numberPages, paginationMenu,
    });
  } catch (error) {
    console.log('Ошибка в загрузке жанров из бд:', error);
    return res.render('notfound.hbs');
  }
});

export default books;
