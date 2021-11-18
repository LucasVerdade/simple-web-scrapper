import React, { useState } from "react";
import "./App.css";
import axios from "axios";

type redditPostObject = {
  title: string;
  category: string;
  domainURL: string;
  tagline: string;
  authorURL: string;
  comments: string;
};

function App() {
  const [postsList, setPostsList] = useState<Array<redditPostObject>>([]);
  const [subredditInput, setSubredditInput] = useState<string>("");
  const [nPostsInput, setnPostsInput] = useState<number>();

  const refreshList = async (): Promise<void> => {
    const data = await axios(
      `http://localhost:5000/lastPosts?nposts=${nPostsInput}&subreddit=${subredditInput}`
    )
      .then((r) => r.data)
      .catch((e) => console.log("Error", e));
    if (!!data) {
      setPostsList(data);
    }
  };

  return (
    <div>
      <div>
        <h1>Simple Web Scrapper</h1>
        <label htmlFor="subreddit">SubReddit <br />
        <input type="text" name="subreddit" onChange={(e) => setSubredditInput(e.target.value)} />
        </label>
        <br />
        <label htmlFor="nPosts"> Nth last posts <br />
        <input type="text" name="nPosts" onChange={(e) => setnPostsInput(Number(e.target.value))} />
        </label>
        <br />
        <button onClick={() => refreshList()}>Search</button>
      </div>
      <div>
        <ul>
          {postsList.map((post) => 
            <li className={post.category}>{post.title}</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
