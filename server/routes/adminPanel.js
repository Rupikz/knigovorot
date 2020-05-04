import express from 'express';
import multer from 'multer';
import fs from 'fs';
import path from 'path';


const upload = multer({
  dest: 'client/images/preview',
  limits: {
    fileSize: 100000000,
  },
});

const fieldsFiles = [{
  name: 'picture1', maxCount: 1,
}, {
  name: 'picture2', maxCount: 1,
}, {
  name: 'picture3', maxCount: 1,
}];

const admin = express.Router('/');

admin.post('/', upload.fields(fieldsFiles), (req, res) => {
  const pathToFile = path.resolve(__dirname, '../config/configPictures.json');
  if (req.files) {
    const fileContents = JSON.parse(fs.readFileSync(pathToFile, 'utf8'));

    if (Object.prototype.hasOwnProperty.call(req.files, 'picture1')) {
      fileContents.first = req.files.picture1[0].filename;
    }
    if (Object.prototype.hasOwnProperty.call(req.files, 'picture2')) {
      fileContents.second = req.files.picture2[0].filename;
    }
    if (Object.prototype.hasOwnProperty.call(req.files, 'picture3')) {
      fileContents.third = req.files.picture3[0].filename;
    }

    const fileContentsString = JSON.stringify(fileContents);
    fs.writeFileSync(pathToFile, fileContentsString);
  }
  const fileContents = JSON.parse(fs.readFileSync(pathToFile, 'utf8'));

  res.render('adminPanel.hbs', { req, isAdmin: true, fileContents }); // не работает и редирект тоже
});

admin.get('/', (req, res) => {
  const pathToFile = path.resolve(__dirname, '../config/configPictures.json');
  const fileContents = JSON.parse(fs.readFileSync(pathToFile, 'utf8'));

  res.render('adminPanel.hbs', { req, isAdmin: true, fileContents });
});

export default admin;
