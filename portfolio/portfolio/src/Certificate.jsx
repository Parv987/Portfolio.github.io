import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import pdf from "./image/iicc_certificate Parv Pandey.pdf";
import pdf1 from "./image/webinar certificate.pdf";
import img1 from "./image/Screenshot 2022-08-03 141043.png";
import img2 from "./image/Screenshot 2022-08-03 141310.png";
const Certificate=()=>{
    return<><Navbar/><div className="about1"><a href={pdf}><img src={img1} width="200px" height="200px"/></a>
    <a href={pdf1}><img src={img2} width="200px" height="200px"/></a></div>
    <Footer/></>
}
export default Certificate;