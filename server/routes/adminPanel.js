import express from 'express';

const admin = express.Router('/');

admin.get('/', (req, res) => {
  res.render('adminPanel.hbs', { req });
});

export default admin;
