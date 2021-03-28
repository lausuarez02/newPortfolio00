import React, {useState} from "react";
import {Link} from "react-router-dom";

import Hamburger from "../hamburguer/hamburguer.js";
//importing images
import img from "../files/WhatsApp Image 2021-03-10 at 02.22.19.jpeg";
import img0 from "../files/WhatsApp Image 2021-03-10 at 02.22.56.jpeg";
import img01 from "../files/WhatsApp Image 2021-03-10 at 02.24.32.jpeg";
import img02 from "../files/WhatsApp Image 2021-03-10 at 02.25.11.jpeg";
import img03 from "../files/WhatsApp Image 2021-03-21 at 17.36.22.jpeg";
import "./projects.css";
import imggg from "../files/github.svg";
import imgggg from "../files/linkedin.svg";

function Projects(){
    const closeMobileMenu = () => setClick(false);
    const [click,setClick] = useState(false);
    return(
        <div>
             <Hamburger></Hamburger>
             <h1 className="title02">LautaroS</h1>
            <ul className="black">
                <li><a className="Lautaros">LautaroS</a></li>
            <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
                    <li><Link to="/aboutMe" onClick={closeMobileMenu}>About Me</Link></li>
                    <li><a href="#">Projects</a></li>
                   
               

            </ul>
<br></br>
<br></br>
<br></br>
<h1 className="title">Projects</h1>
<br></br>
<br></br>

        <div className="grid-container">
            <div className="container00"><img src={img} className="img001"/><p>Budget app using Vainilla JavaScript <br/><span className="back">JavaScript</span> <span className="back">Css</span></p></div>
            <div><img src={img0} className="img001" alt="Projects"/><p>Basically a To do List. <br/><span className="back">JavaScript</span> <span className="back">React Router</span></p></div>
            <div><img src={img01} className="img001" alt="Projects"/><p>The First portFolio I made <br/><span className="back">JavaScript</span> <span className="back">HTML</span> <span className="back">Css</span></p></div>
            <div><img src={img02} className="img001" alt="Projects"/><p>WebPage to an ISP <br/><span className="back">JavaScript</span> <span className="back">HTML</span> <span className="back">Css</span></p></div>
            <div><img src={img03} className="img001" alt="Projects" /><p>Chat Room, I did not do it fully <br/><span className="back">ReactJs</span> <span className="back">HTML</span> <span className="back">Css</span> <span className="back">express</span><span className="back">socket.io</span>
            <span className="back">Node</span></p></div>
        </div>
        <div className="raya"></div>
                  
                  <ul className="lista"><li><a href="https://github.com/lausuarez02"><img src={imggg} className="github" alt="gitHub"></img></a></li>
                 <li> <a href="www.linkedin.com"><img src={imgggg} className="linkedin" alt="Linkedin"></img></a></li>
                  </ul>
        </div>
    )
}

export default Projects;