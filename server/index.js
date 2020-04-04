import express from 'express';
import fs from 'fs';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';

import config from './config/config';
import pool from './database';


const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(`${__dirname}/public/`));

// app.get('/login', (req, res) => {

// });

app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'public/index.html')));


pool.query('SELECT NOW()', (err, res) => {
  console.log(res.rows);
  pool.end();
});

app.listen(config.PORT, () => {
  console.log('server has been started..', config.PORT);
});
