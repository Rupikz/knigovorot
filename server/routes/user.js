import express from 'express';

const user = express.Router('/');

user.get('/', (req, res) => {
  console.log(req.user);
  res.render('user.hbs', { req });
});

export default user;
