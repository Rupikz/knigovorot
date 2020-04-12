import express from 'express';
import multer from 'multer';

import { updateUser, updateImage } from '../controller/updateUsers';

const edit = express.Router('/');

const upload = multer({
  dest: 'public/images/users',
  limits: {
    fileSize: 100000000,
  },
});

edit.post('/', upload.single('file-avatar'), updateImage);

edit.post('/', updateUser, (req, res) => res.render('edit.hbs'));

edit.get('/', (req, res) => {
  res.render('edit.hbs', { req });
});

export default edit;
