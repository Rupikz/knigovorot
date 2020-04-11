import express from 'express';

const edit = express.Router('/');

edit.get('/', (req, res) => res.render('edit.hbs', { req }));

export default edit;
