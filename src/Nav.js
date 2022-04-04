import React from 'react';
import './App.css'
import { Link  } from 'react-router-dom';
function Nav(){
    return(
        <div>
<Link to="/">
        <h3 className="nav-links">
            About

        </h3>
        </Link>
        <Link to="/art">
        <h3 className="nav-links">
            Art
            
        </h3> 
        </Link>
        <Link to="/project">
        <h3 className="nav-links">
            Project
        </h3>
        </Link>
        </div>
    )
}

export default Nav
