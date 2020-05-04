import express from 'express';

const admin = express.Router('/');

admin.get('/', (req, res) => {
  res.render('adminPanel.hbs', { req, isAdmin: true });
});

export default admin;
