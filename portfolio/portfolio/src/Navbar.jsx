import React from "react";
import {NavLink} from "react-router-dom";
import "./index.css";

const Navbar=()=>{
    return <><nav>
      
      <img  height="100px" width="100px" src="https://previews.123rf.com/images/niyazz/niyazz1312/niyazz131200067/24697121-letters-and-symbols-in-fire-letter-p-.jpg"></img>
      <div><ul><li><NavLink  to="/home"><p>Home</p></NavLink></li>
      <li><NavLink to="/about"><p>AboutUs</p></NavLink></li>
      <li><NavLink to="/contact"><p>ContactUs</p></NavLink></li></ul></div></nav></>
}
export default Navbar;