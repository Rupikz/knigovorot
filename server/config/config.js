export default {
  PORT: process.env.PORT || 8085,
  PROJECT: 'development',
  // DB_CONNECT: 'postgresql://postgres:rjkz2010@localhost:5432/development',
  // DB_CONNECT: 'postgres://yrwrsvixkefrju:e70a3d88889a1ebed2a29bc61fb141ee7bc0f02086e6f4be62a010a6e4d77450@ec2-54-247-103-43.eu-west-1.compute.amazonaws.com:5432/d3b3713rfkiob2',
  // DATABASE_URL='postgres://yrwrsvixkefrju:e70a3d88889a1ebed2a29bc61fb141ee7bc0f02086e6f4be62a010a6e4d77450@ec2-54-247-103-43.eu-west-1.compute.amazonaws.com:5432/d3b3713rfkiob2/db?ssl=true'

  session: {
    cookie_secret: 'secret',
    cookie_name: 'sid',
    session_store: 'token',
  },
  COOKIE_TIME: 1000 * 60 * 60 * 24 * 7, // Одна неделя
  SECRET_JWT: 'secret',
};

// sudo lsof -i :3000
// kill -9 {PID}
