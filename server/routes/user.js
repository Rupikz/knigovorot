import express from 'express';

const user = express.Router('/');

user.get('/', (req, res) => {
  res.render('user.hbs', { req });
});

export default user;
