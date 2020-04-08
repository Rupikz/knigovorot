import express from 'express';
import usersController from '../controller/usersController';

const login = express.Router('/login');

login.post('/', usersController);

export default login;
