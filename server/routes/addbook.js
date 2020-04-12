import express from 'express';
import multer from 'multer';

const addbook = express.Router('/');

const upload = multer({
  dest: 'public/images/users',
  limits: {
    fileSize: 100000000,
  },
});

addbook.post('/', upload.single('file-avatar'), (req, res) => {

});

addbook.get('/', (req, res) => res.render('addbook.hbs', { req }));

export default addbook;
