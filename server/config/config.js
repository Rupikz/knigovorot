export default {
  PORT: process.env.PORT || 8082,
  PROJECT: 'development',
  DB_CONNECT: 'postgresql://postgres:rjkz2010@localhost:5432/development',
  session: {
    cookie_secret: 'secret',
    cookie_name: 'sid',
    session_store: 'xz chto eto',
  },
  SECRET_JWT: 'secret',
};
