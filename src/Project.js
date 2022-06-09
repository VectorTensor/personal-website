import React from 'react'
import { Link  } from 'react-router-dom';

import login from './images/login.JPG'
import post from './images/posts.JPG'
import forum from './images/forum.JPG'
import search_correct from './images/search_correct.JPG'

import  search_mistake from './images/search_mistake.JPG'

import  search_image from './images/search_image.JPG'
function Project()
{
    return(
        <div className="main">

        <h1>
            Project
        </h1>
        <div className="description">
    Here is some information of the project that i have done.
        <ol>
        <li> <a href="https://github.com/VectorTensor/IOEOverflow"> IOE Overflow</a></li>
        Its a website for IOE students to peer review their answers. It has elastic search facility along with a login system and also OCR so that the student can search question even
        from the screenshots images.
        here are some screenshots of the project
        <a href={login}>
<img src={login} className="photos"/>
        </a>
        <p> This is the login screen where we can login to the account. If you don't have account you can still view the post but you cant add new posts and upvote/downvote or comment.
        You can click on Don't have an account yet to create a new account.
        </p>
        <a href={post}>
<img src={post} className="photos"/>
        </a>
        <p> This is posts page where you can view recent posts </p>

        <a href={forum}>
<img src={forum} className="photos"/>
        </a>
        <p>This is page where you can add new post but the user must be logged in </p>
        <a href={search_correct}>
<img src={search_correct} className="photos"/>
        </a>
        <p>This is the screen shot of search</p> 
        <a href={search_mistake}>
<img src={search_mistake} className="photos"/>
        </a>
        <p> This is search when there is a mistake in spelling. Elastic search still manages to get the correct result.</p>

        <a href={search_image}>
<img src={search_image} className="photos"/>
        </a>
<p> This is search using text in the image. Single we have used OCR we can also search for the terms in the image.</p>

        <li><a href="https://github.com/VectorTensor/personal-website">Personal website</a></li>
        Its a website that has details about me and work I have done. Its completely made in reactjs.
        <li><a href="https://github.com/VectorTensor/Chad-anime-downloader">Anime downloader</a></li>
        Its a anime downloading script that automatically downloads the anime you want and the episodes specified.

        <li><a href="https://github.com/VectorTensor/ProjectManager">To do list</a></li>
        App to make to do list in command line.
        
        <li><a href="https://github.com/VectorTensor/MemoryGame">Memory game using pygame.</a></li>
        Simple game made using pygame.
        <li><a href ="https://github.com/VectorTensor/typing">Typing widget</a></li>
        A widget to measure typing speed
        </ol>
        </div>
        </div>
    )
    
}

export default Project;
