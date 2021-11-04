import  React from 'react';
import About from './About.js';
import Art from './Art.js';
import Project from './Project.js';
import Nav from './Nav.js';
import './App.css'
import {BrowserRouter as Router,Switch,Route} from  'react-router-dom'
function Home (){

    return(
        <Router>

<div>
    <div className="nav">

        <div id="logo">
        Prayash Thapa
        </div>
        <div className="menu"> 
    <Nav />
        </div>
        </div>
        <Switch>
        <Route path="/" exact  component={About}/>
    <Route path ="/art" component={Art}/>    
<Route path="/project" component={Project}/>
</Switch>

    
    </div>
        </Router>
    );
}

export default Home 
