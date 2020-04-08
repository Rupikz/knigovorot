import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';
// import passport from 'passport';
import flash from 'connect-flash';
import cors from 'cors';

import config from './config/config';
import verifyToken from './middleware/verifyAuth';

// Routers

import login from './routes/login';
import vue from './routes/vue';

const app = express();

// MiddleWare

app.use(cookieParser());
app.use(cors()); // xz zachem, no nado
app.use(session({
  secret: config.session.cookie_secret,
  name: config.session.cookie_name,
  store: config.session.sessionStore,
  proxy: true,
  resave: true,
  saveUninitialized: true,
}));
app.use(express.static(`${__dirname}/public/`));
app.use(flash());
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/login', login);
app.use('*', vue);


app.listen(config.PORT, () => {
  console.log('server has been started..', config.PORT);
});
