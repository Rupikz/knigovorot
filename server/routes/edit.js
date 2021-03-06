import express from 'express';
import multer from 'multer';

import { updateUser, updateImage } from '../controller/updateUsers';

const edit = express.Router('/');

const upload = multer({
  dest: 'server/public/images/users',
  limits: {
    fileSize: 100000000,
  },
});

edit.post('/', upload.single('file-avatar'), updateImage);

edit.post('/', updateUser, (req, res) => res.render('edit.hbs'));

edit.get('/', (req, res) => {
  if (!req.user) {
    return res.redirect('/404');
  }

  res.render('edit.hbs', { req });
});

export default edit;
