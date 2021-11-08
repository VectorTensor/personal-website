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
        <li><a href="https://github.com/VectorTensor/Chad-anime-downloader">Anime downloader</a></li>
        <li><a href="https://github.com/VectorTensor/ProjectManager">To do list</a></li>
        <li><a href="https://github.com/VectorTensor/MemoryGame">Memory game using pygame.</a></li>
        <li><a href ="https://github.com/VectorTensor/typing">Typing widget</a></li>
        <li><a href ="https://github.com/VectorTensor/ProjectManager">To do list</a></li>
        <li><a href="https://github.com/VectorTensor/personal-website">Personal website</a></li>
        </ol>
        </div>
        </div>
    )
    
}

export default Project;
