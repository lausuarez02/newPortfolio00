import React, {useState} from "react";
import {Link} from "react-router-dom";

import Hamburger from "../hamburguer/hamburguer.js";
//import css
import "./aboutMe.css";
import img from "../files/Richie_2.png";
import imgg from "../files/Lautaro.png";
import imggg from "../files/github.svg";
import imgggg from "../files/linkedin.svg";
import icon0 from "../files/astronave.svg";
import icon01 from "../files/atom.svg";
import icon02 from "../files/coding.svg";
import icon03 from "../files/movie-night.svg";
import icon04 from "../files/music-note.svg";
import icon05 from "../files/open-book.svg";

function AboutMe(){
    const closeMobileMenu = () => setClick(false)
    const [click, setClick] = useState(false);
    return(
        <div>
            <header>
                <ul className="black">
                    <li ><a className="Lautaros">LautaroS</a></li>
                    <li><Link to="/" onClick={closeMobileMenu} >Home</Link></li>
                    <li><a href="#">About Me</a></li>
                    <li><Link to="/Projects" onClick={closeMobileMenu}>Projects</Link></li>
                   

                </ul>
                <h1 className="title02">LautaroS</h1>
                <Hamburger></Hamburger>
                <br/>
                <br/>
                <div className="container">
                    <h1>About Me</h1>
                    <p>        I'm a young man of 19 years old, my journey in programming did't start
                        so far away, but in the short time I've been studying it I gave it all in order to
                     have   a better understanding.
                     <p>
                        I define my self as resilient because I don't give up so easy even when
                        it looks almost impossible i  take a deep breath and go on, i apply this to
                        problem solving in programming and my life in general.</p>
                        <p> When i feel overwhelmed i just watch a serie about science , rockets because i love rockets or even a love movie (I love romantic films),
                        and i take a break for a while.</p>
              
                    </p> </div>
                    <img src={img} className="lau" alt="3D Image"/>
                  
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="gridd-container">
                  <h2>Hobbies</h2>
                  <div >
                      <ul className="lista0">
                      <li><img src={icon0} className="icon0" title="Space" alt="rocket"/></li>
                      <li><img src={icon01} className="icon0" title="Science" alt="science"/></li>
                      <li> <img src={icon02} className="icon0" title="Code" alt="code"/></li>
                      <li><img src={icon03} className="icon0" title="Movie Night" alt="Movie Night"/></li>
                      <li><img src={icon04} className="icon0" title="Music" alt="Music"/></li>
                      <li><img src={icon05} className="icon0" title="Read" alt="Read"/></li>
                      </ul>
                      </div>
                  </div>
                  <br/>
                  <br/>
                  <br/>

                  <div className="raya"></div>
                  
                <ul className="lista"><li><a href="https://github.com/lausuarez02"><img src={imggg} className="github" alt="gitHub"></img></a></li>
               <li> <a href="www.linkedin.com"><img src={imgggg} className="linkedin" alt="Linkedin"></img></a></li>
                </ul>
            </header>
        </div>
    )

}
export default AboutMe;

