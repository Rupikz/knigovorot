import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import path from 'path';
import flash from 'connect-flash';
import cors from 'cors';
import hbs from 'hbs';


import config from './config/config';
import verifyToken from './middleware/verifyAuth';

// Routers

// import login from './routes/login';
import index from './routes/index';
import login from './routes/login';
import books from './routes/books';


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
app.use(express.static(path.resolve(__dirname, '../public')));
app.use(flash());
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  next();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'hbs');
hbs.registerPartials(path.resolve(__dirname, '../views/partials'));

app.use(verifyToken);
app.use('/books', books);
app.use('/login', login);
app.use('/', index);


app.listen(config.PORT, () => {
  console.log('server has been started..', config.PORT);
});
