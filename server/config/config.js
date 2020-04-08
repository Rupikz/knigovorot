export default {
  PORT: process.env.PORT || 8085,
  PROJECT: 'development',
  DB_CONNECT: 'postgresql://postgres:rjkz2010@localhost:5432/development',
  session: {
    cookie_secret: 'secret',
    cookie_name: 'sid',
    session_store: 'token',
  },
  COOKIE_TIME: 60 * 60 * 24 * 7, // Одина неделя походу
  SECRET_JWT: 'secret',
};
