export default {
  PORT: process.env.PORT || 8085,
  PROJECT: 'development',
  session: {
    secret: 'secret',
    name: 'sid',
    proxy: true,
    resave: true,
    saveUninitialized: true,
  },

  COOKIE_TIME: 1000 * 60 * 60 * 24 * 7, // one week
  SECRET_JWT: 'secret',
};

// sudo lsof -i :3000
// kill -9 {PID}
