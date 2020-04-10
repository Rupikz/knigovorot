import express from 'express';
// import usersController from '../controller/usersController';

const login = express.Router('/');

login.get('/', (req, res) => res.render('login.hbs'));

// login.post('/', usersController);

export default login;
