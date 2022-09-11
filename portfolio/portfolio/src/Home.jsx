import Navbar from "./Navbar";

import "./index.js";
import Footer from "./Footer";

const Home=()=>{
    return<>
    <Navbar/>
  
    <div className="intro"><h1 ><u>Welcome to Parv Pandey Page</u></h1>
    <p1>Here you will come to know Everything Regarding Me.<br/>You will come to know every information about me .Regarding my Qualification,Skills.
       <br/> This is My Personal Portfolio.And this Portfolio is Made by Me</p1></div>
   <div className="imgcon"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwe1uysp4p9wXxb3Y08XYdoWRmugExfwYRrA&usqp=CAU" alt="we"/></div>
  
    <Footer/>
    </>
}
export default Home;