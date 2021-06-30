import React, {useState} from "react";
import {Link} from "react-router-dom";
//import Button from "../Button/Button";
import "./navbar.css";
import img from "../photos/7a0c49d.jpg";
import imgg from "../files/linkedin.svg";
import imggg from "../files/github.svg";
//import imgggg from "../files/Lautaro.png";
//import typewritter
import Typewriter from 'typewriter-effect';
//export {default} from "../burguer";
import Hamburger from "../hamburguer/hamburguer.js";





function Navbar(){
    const closeMobileMenu = () => setClick(false);
const [click,setClick] = useState(false);
/*var cuerpo = document.querySelector(".navbar");
function blackMode(){cuerpo.style.backgroundColor = "black";}*/
/*var i = 0;
var txt = 'Lorem ipsum dummy text blabla.';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("txt").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
*/
    return(
      
        
        <div className="navbar">
            <header>
              <div className="menu">
                <ul className="black">
                   {/* <li><button onClick={blackMode}>Negro</button></li>
                    <li className="black">
                <Link style={{ textDecoration: 'none' , color:"white"}} to='/button' className='nav-links' onClick={closeMobileMenu}>
                B 
              </Link>
              
              </li>*/}

              <li ><a className="Lautaros">LautaroS</a></li>
                    <li ><a href="#" >Home</a></li>
                    <li><Link to="/aboutMe" onClick={closeMobileMenu}>About Me</Link></li>
                    <li><Link to="/Projects" onClick={closeMobileMenu}>Projects</Link></li>
                   
               
                </ul>
                <h1 className="title02">LautaroS</h1>
                <Hamburger></Hamburger>
                </div>
                <div id="typew">
                <Typewriter 

                  options={{
                    strings:["Hi there!", "I am Lautaro", "I am a front end developer"],
                    autoStart:true,
                    loop:true,
                  }}
                />
            
                </div>
               

           
                <img className="image" src={img} alt="LautaroSuarez"/>
               <br/><br/>
               <br/>
               <br/>
               <br/>
               <br/>
               <br/>

                <a href="../files/LautarosResumme.pdf" download className="resume">Download My Resume</a>
              <br/>
              <br/>
              <div className="raya"></div>
                <ul className="lista"><li><a href="https://github.com/lausuarez02"><img src={imggg} className="github" alt="GitHub"></img></a></li>
               <li> <a href="www.linkedin.com"><img src={imgg} className="linkedin" alt="linkedin"></img></a></li>
                </ul>
                {/*<Link to="/files/myResume.pdf" download><h3>Download My Resume</h3></Link>
              {/*<Button>
              <button onClick={Button}>Black</button>
              </Button>*/}
            </header>
        </div>
        
    )
};

export default Navbar;