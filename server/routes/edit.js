import express from 'express';
import updateUser from '../controller/updateUsers';

const edit = express.Router('/');

edit.post('/', updateUser, (req, res) => res.render('edit.hbs'));

edit.get('/', (req, res) => {
  res.render('edit.hbs', { req });
});

export default edit;
