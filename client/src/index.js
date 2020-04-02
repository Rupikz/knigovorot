import express from 'express';
import fs from 'fs';
import path from 'path';
import config from './config/config.js';

const app = express();

app.get('*', function (req, res) {
    let html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf-8');
    res.send(html);
});

app.listen(config.PORT, () => {
  console.log('server has been started..', config.PORT);
});
