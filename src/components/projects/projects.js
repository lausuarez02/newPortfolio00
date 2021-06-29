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

<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
      <img src={img} class="card-img-top" alt={img}/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={img0} class="card-img-top" alt={img0}/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={img01} class="card-img-top" alt={img01}/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={img02} class="card-img-top" alt={img02}/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
         
    
        <div className="raya"></div>
                  
                  <ul className="lista"><li><a href="https://github.com/lausuarez02"><img src={imggg} className="github" alt="gitHub"></img></a></li>
                 <li> <a href="www.linkedin.com"><img src={imgggg} className="linkedin" alt="Linkedin"></img></a></li>
                  </ul>
        </div>
    )
}

export default Projects;