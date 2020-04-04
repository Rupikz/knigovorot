import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import passport from 'passport';
import flash from 'connect-flash';


import cors from 'cors';

import config from './config/config';
import pool from './database';


const app = express();

// MiddleWare

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
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

app.use(passport.initialize());
app.use(passport.session());

// app.get('/login', (req, res) => {

// });

app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'public/index.html')));


pool.query('SELECT NOW()', (err, res) => {
  console.log(res.rows);
  pool.end();
});

app.listen(config.PORT, () => {
  console.log('server has been started..', config.PORT);
});
