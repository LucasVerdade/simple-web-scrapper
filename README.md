# Simple Web Scrapper

> Status: Protoype working  
  
## **Introduction**
I've create this project to learn the basis of docker, docker-compose, node and express. At the moment that I created I already had experience with React.  
So, I thought it was interesting to create a project with all the technologies I was learning.
And I also like scrapping pages and transforming the collected data to a json so it can be easly handle by any other application.  
  
## **Installation**  
You will need _docker_ and _docker-compose_ to run the applications. You can install them by the following links:  
- Get Docker: https://docs.docker.com/get-docker/
- Get Docker-compose: https://docs.docker.com/compose/install/

With the previous dependencies installed, enter the repo folder and run 
`docker-compose build` to create the docker images.  
And use `docker-compose up` to run the application.

Obs.: You can run without docker, but that's not what it was made for.  
To run without docker you can enter in the `backend/` or `frontend/` folder and run `npm install`, to install the dependencies, and then run `npm start` to execute the application. To run both you may need two terminals, or run the process in background, and run both commands on each folder.  
  
## **Usage**

This project has two parts. The backend, which is a reddit post scrapper, and the frontend, which is just a user interface for the backend.  

To use the scrapper backend make a request, or open in your browser, this url: http://localhost:5000/lastPosts?nposts=\<**post_amount**>&subreddit=\<**yoursubreddit**>  

The scrapper return data from the last posts of a subreddit. If no subreddit is passed then use default 'brasil' subreddit is used.  
If no `nposts` is passed then return just the last post data.

To use the frontend open the site http://localhost:3000.  
There will be two inputs so you can insert the subreddit and the amount of posts you want.  
A list with the post's title will appear after you click the **"Search"** button.  
There is an usage example in the animation below.

![Simple React App working with the backend](https://github.com/LucasVerdade/simple-web-scrapper/blob/main/docs/prototype-example.gif?raw=true)  


---
## **Known problems**
- The user interface may not cover all the edge cases for the backend; 
- The backend show a error message if you try to use a subreddit that does not exist. But the frontend does not handle that.
