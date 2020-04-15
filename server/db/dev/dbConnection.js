import pool from './pool';


pool.on('connect', () => {
  console.log('connected to the db');
});

const createTableUsers = () => {
  const userCreateQuery = `CREATE TABLE IF NOT EXISTS users
  (id SERIAL PRIMARY KEY, 
  email VARCHAR(100) UNIQUE NOT NULL,
  login VARCHAR(100) UNIQUE NOT NULL,
  first_name VARCHAR(100), 
  last_name VARCHAR(100), 
  password VARCHAR(100) NOT NULL,
  admin boolean DEFAULT(false),
  created_on DATE NOT NULL,
  phone BIGINT,
  id_image SERIAL,
  books TEXT)`;

  pool.query(userCreateQuery)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};

const createTableBooks = () => {
  const bookCreateQuery = `CREATE TABLE IF NOT EXISTS books
  (id SERIAL PRIMARY KEY,
  name_book VARCHAR(100) NOT NULL,
  author_book VARCHAR(100) NOT NULL,
  genre SMALLINT NOT NULL,
  year SMALLINT NOT NULL,
  publisher VARCHAR(100),
  price money NOT NULL)`;

  pool.query(bookCreateQuery)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};

const createTableGenres = () => {
  const genreCreateQuery = `CREATE TABLE IF NOT EXISTS genres
  (id SMALLSERIAL PRIMARY KEY,
  genres VARCHAR(100),
  subgenre SMALLINT)`;

  pool.query(genreCreateQuery)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};

const createTableSubgenres = () => {
  const subgenreCreateQuery = `CREATE TABLE IF NOT EXISTS subgenres
  (id SMALLSERIAL PRIMARY KEY,
  subgenre VARCHAR(100))`;

  pool.query(subgenreCreateQuery)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};

pool.on('remove', () => {
  console.log('client removed');
  process.exit(0);
});


const createAllTables = () => {
  createTableUsers();
  createTableBooks();
  createTableGenres();
  createTableSubgenres();
};

export default createAllTables;

require('make-runnable'); // хз надо ли, но пока уберу
