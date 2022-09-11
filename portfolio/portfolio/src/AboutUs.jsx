import Footer from "./Footer";
import img from "./image/parv2.jpeg";

import ReactPlayer from "react-player";

import Navbar from "./Navbar";
import "./index.css";
import { NavLink } from "react-router-dom";
const AboutUs=()=>{
    return<>
    <Navbar/>
   <br/><br/><br/><div className="as"><p>Hello, My name is Parv Pandey I pursued my schooling at The Aditya Birla Public <br/>School (Renukoot, Sonebhadr). <br/>I am a resident of Varanasi .<br/> Currently, I am pursuing B.Tech from Galgotias University (Greater Noida).<br/>
  
    </p><p>  I have commands in languages like Java, CSS, Html, and basic Java Script.</p>
    </div> 
  
 <div className="about"><img src={img} width="300px" height="500px"/>
 <NavLink to="/certificate"><h5>CERTIFICATE</h5></NavLink>
 <h4>cocurricular activites</h4>
 <a href="https://youtu.be/AFlBr8fi6TA"><button>CLICK TO WATCH</button></a>


 </div><br/> 

<Footer/></>
}
export default AboutUs;