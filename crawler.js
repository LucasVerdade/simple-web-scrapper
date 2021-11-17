const Cheerio = require('cheerio');
const axios = require('axios');

async function getNthLastPosts(nthLastPosts=1, subreddit="brasil") {
    try {
        const { data } = await axios.get(`https://old.reddit.com/r/${subreddit}/new/`);
        const $ = Cheerio.load(data);

        const postList = $("div[id^=thing]");
        const selectedPosts = postList.splice(0, nthLastPosts >= postList.length ? postList.length : nthLastPosts)

        if (selectedPosts === null || typeof(selectedPosts) === "undefined") {
            throw "ERROR: last post not found." ;
        }
        
        return selectedPosts.map((post) => ({
            title: $(post).find("p.title a")?.text(),
            category: $(post).find("p.title .linkflairlabel")?.text(),
            domainURL: $(post).find("p.title span.domain a")?.attr("href"),
            tagline: $(post).find("p.tagline")?.text(),
            authorURL: $(post).find("p.tagline a.author")?.attr("href"),
            comments: $(post).find("a.comments")?.text(),
        }));
        
    } catch (error) {
        throw error;
    }
}

module.exports = getNthLastPosts;