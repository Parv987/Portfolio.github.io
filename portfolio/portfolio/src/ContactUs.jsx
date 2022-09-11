import Navbar from "./Navbar";
import "./index.css";
import Footer from "./Footer";
import img from "./image/parv2.jpeg";
import instagram from "./image/instagram.png";
const ContactUs=()=>{
    return<>
    <Navbar/>
   <h1>Welcome to contact page</h1> 
  
 <div className="contactc">
 <h1>Feel Free to Contact Me!</h1>
 <div className="contactd"><img src={img} width="150px" height="150px"/></div>
 <div className="LINK"> <a href="https://wa.me/8795339501 " ><img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png" width="50px" height="50px" alt="df"/></a>
 <a href="http://linkedin.com/in/parv-pandey-a534b3244">  <img src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw" width="50px" height="50px"/></a>
 <a href="https://instagram.com/___parv_?igshid=YmMyMTA2M2Y="><img src={instagram} width="70px" height="70px"/></a> </div>

 </div>
   
    <Footer/>
    </>
}
export default ContactUs;