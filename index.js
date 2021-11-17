const express = require('express');
const getNthLastPosts = require('./crawler.js')

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();
app.get('/', async (req, res) => {
    const result = await getNthLastPosts(5);
    res.send([...result]);
});

app.get('/[1-9]+', async (req, res) => {
    const nthParam = Number(req.originalUrl.replace("/",""));
    const result = await getNthLastPosts(nthParam);
    res.send([...result]);
});

app.listen(PORT, HOST);
