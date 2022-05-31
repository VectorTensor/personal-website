import React from 'react'
import { Link  } from 'react-router-dom';

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
        from the screenshots.
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
