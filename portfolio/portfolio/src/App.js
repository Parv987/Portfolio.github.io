
import './App.css';
import Navbar from "./Navbar";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import ContactUs from './ContactUs';
import Navbar1 from "./Navbar1";
import Certificate from "./Certificate";
function App() {
  return (
    <BrowserRouter>
    <Routes>
  
    <Route path="/" element={<Home/>}/>
    <Route path="home" element={<Home/>}/>
    <Route path="about" element={<AboutUs/>}/>
    <Route path="contact" element={<ContactUs/>}/>
    <Route path='navbar1' element={<Navbar1/>}/>
    <Route path='certificate' element={<Certificate/>}/>
    
    
    </Routes>
    </BrowserRouter>
  );
}

export default App;
