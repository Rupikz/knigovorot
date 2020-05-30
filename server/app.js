import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import path from 'path';
import flash from 'connect-flash';
import hbs from 'hbs';

import config from './config/config';
import verifyToken from './middleware/verifyAuth';
import verifyAdmin from './middleware/verifyAdmin';
import flashMiddleWare from './middleware/flashMiddleWare';

import index from './routes/index';
import login from './routes/login';
import about from './routes/about';
import books from './routes/books';
import likes from './routes/likes';
import book from './routes/book';
import user from './routes/user';
import edit from './routes/edit';
import addbook from './routes/addbook';
import adminPanel from './routes/adminPanel';
import notFound from './routes/notFound';

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session(config.session));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(flash());
app.use(flashMiddleWare);

app.set('view engine', 'hbs');
hbs.registerPartials(path.resolve(__dirname, '../views/partials'));

app.use(verifyToken);
app.use('/', index);
app.use('/id*', book);
app.use('/edit', edit);
app.use('/books', books);
app.use('/about', about);
app.use('/likes', likes);
app.use('/login', login);
app.use('/addbook', addbook);
app.use('/:user', user);
app.use('/admin', verifyAdmin, adminPanel);
app.use('/:not_found', notFound);

app.listen(config.PORT, () => {
  console.log('server has been started..', config.PORT);
});
