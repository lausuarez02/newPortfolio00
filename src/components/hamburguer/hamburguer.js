import React, { useState } from "react"
import {Link} from "react-router-dom";
import "./hamburguer.css";

import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"

function Hamburger(){
  const closeMobileMenu = () => setClick(false);
  const [click,setClick] = useState(false);
    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle = () => {
        setNavbarOpen(!navbarOpen) 
      }
      const closeMenu = () => {
        setNavbarOpen(false)
      }
    return (
        
        <nav className="navBar">

<button onClick={handleToggle}>
  {navbarOpen ? (
    <MdClose style={{ color: "#fff", width: "30px", height: "30px" }} />
  ) : (
    <FiMenu style={{ color: "#7b7b7b", width: "30px", height: "30px" }} />
  )}
</button>
<ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
<br></br>
<br></br>
<br></br>

<li><Link to="/" onClick={closeMobileMenu} >Home</Link></li>
<br/>
<li><Link to="/aboutMe" onClick={closeMobileMenu}>About Me</Link></li>
<br/>
<li><Link to="/Projects" onClick={closeMobileMenu}>Projects</Link></li>

</ul>
        

        </nav>
      )
}

export default Hamburger;