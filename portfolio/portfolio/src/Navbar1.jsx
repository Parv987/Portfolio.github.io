import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";
import Navbar from "./Navbar";
const Navbar1=()=>{
    return <><Navbar/><nav className="navba navbar-expand-lg bg-light">
      <div class="container">
<input type="checkbox"/>
<div class="left">
<div class="check">
 <input type="checkbox"/>
</div>
<div class="menu">
<ul>
<li>Home</li>
<li>About</li>
<li>Gallery</li>
<li>Vision</li>
<li>Contact</li>
</ul>
</div>
</div>
<div class="right"></div>
</div>
    <div className="container-fluid">
    
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/home">Home</a>
          </li><br/><br/>
          <li className="nav-item">
            <a className="nav-link" href="/About">About Me</a>
          </li><br/><br/>
          <li className="nav-item">
            <a className="nav-link" href="/contact">Contact</a>
          </li><br/><br/>
          
        </ul>
      </div>
    </div>
  </nav></>
}
export default Navbar1;