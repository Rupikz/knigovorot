import express from 'express';
import fs from 'fs';
import path from 'path';
import config from './config/config.js';
import bodyParser from 'body-parser';
import cors from 'cors';


const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public/'));

// app.get('/login', (req, res) => {

// });

app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'public/index.html')));

app.listen(config.PORT, () => {
    console.log('server has been started..', config.PORT);
});