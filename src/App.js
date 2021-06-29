import React from "react";

//Importing components
import Navbar from "./components/navbar/navbar.js";
import AboutMe from "./components/aboutMe/aboutMe";
import Projects from "./components/projects/projects";
//import Hamburger from "./components/hamburguer/hamburguer.js";

import {HashRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
       <Router>
         
         <Switch>
           <Route path="/" exact component={Navbar}/>
          <Route path="/aboutMe" exact component={AboutMe}/>
         <Route path="/Projects" exact component={Projects}/>
         
        
         </Switch>
         </Router>
    </div>
  );
}

export default App;
