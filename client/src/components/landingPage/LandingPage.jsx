import React from "react";
import { Link } from "react-router-dom";
import './landingPage.css';
import Logo from "../landingPage/Logo.mp4"

export const LandingPage = () => {
    return (

        <div className="landing-page">
      <Link to={"/home"}>
            <button className="button">Dionisio Wine</button>
        </Link>
      <video
         autoPlay 
         loop
          style= {{
            position: "absolute",
            width: "100%" ,
            height:"100%", 
            top:"-2vw",
            objectFit:"cover",
            transform: "(-50%, -50%)",
            zIndex:-1,

             }}>
             
            {/* style={{ 
      backgroundImage: "url(/Mi proyecto.png)" }} */}
        <h1>Landing Page</h1>
        
            
            <source src={Logo} type="video/mp4"></source>
        </video>
        
       
        </div>
    );
}