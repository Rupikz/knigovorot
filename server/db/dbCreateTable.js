import pool from './pool';

pool.on('connect', () => {
  console.log('connected to the db');
});

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
  id_image VARCHAR(100))`;

const bookCreateQuery = `CREATE TABLE IF NOT EXISTS books
  (id SERIAL PRIMARY KEY,
  name_book VARCHAR(100) NOT NULL,
  author_book VARCHAR(100) NOT NULL,
  genre_id SMALLINT NOT NULL,
  year SMALLINT NOT NULL,
  publisher_id SMALLSERIAL,
  price SMALLINT NOT NULL,
  id_user SERIAL NOT NULL,
  id_image_book text[],
  exists boolean DEFAULT(true),
  FOREIGN KEY (genre_id) REFERENCES genres (id),
  FOREIGN KEY (publisher_id) REFERENCES publisher (id),
  FOREIGN KEY (id_user) REFERENCES users (id))`;

const genresCreateQuery = `CREATE TABLE IF NOT EXISTS genres
  (id SMALLSERIAL PRIMARY KEY,
  genres VARCHAR(100),
  art boolean DEFAULT(true))`;

const publisherCreateQuery = `CREATE TABLE IF NOT EXISTS publisher
  (id SMALLSERIAL PRIMARY KEY,
  publisher VARCHAR(100))`;

const dbQuery = (createTableQuery) => {
  pool.query(createTableQuery)
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
  dbQuery(userCreateQuery);
  dbQuery(bookCreateQuery);
  dbQuery(genresCreateQuery);
  dbQuery(publisherCreateQuery);
};

export default createAllTables;
