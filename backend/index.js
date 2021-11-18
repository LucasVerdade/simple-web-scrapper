const express = require('express');
const getNthLastPosts = require('./crawler.js')

const PORT = 5000;
const HOST = '0.0.0.0';
 
const app = express();
app.get('/', async (req, res) => {
    const result = await getNthLastPosts();
    res.send([...result]);
});

app.get('/[1-9]+', async (req, res) => {
    const nthParam = Number(req.originalUrl.replace("/",""));
    const result = await getNthLastPosts(nthParam);
    res.send([...result]);
});

app.get('/lastPosts', async (req, res) => {
    const { subreddit, nposts } = req.query;
    const cleanSubReddit = subreddit?.trim();
    const cleanNPosts = !!nposts ? Number(nposts) : undefined; 
    try {
        const result = await getNthLastPosts(cleanNPosts,cleanSubReddit);
        res.send([...result]);
    } catch (error) {
        res.send("Oops! This subreddit does not exist :/")
    }
});

app.listen(PORT, HOST);
