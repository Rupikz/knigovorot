import express from 'express';
import usersController from '../controller/usersController';

const login = express.Router('/');

login.post('/', usersController, (req, res) => res.render('index.hbs'));

login.get('/logout', (req, res) => {
  res.clearCookie('token', { path: '/' });
  res.redirect('/');
});

login.get('/', (req, res) => {
  res.render('login.hbs', { req });
});

export default login;
