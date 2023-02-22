import React from "react";
import { Link } from "react-router-dom";
import './landingPage.css';
import Logo from "../landingPage/Logo.mp4"

export const LandingPage = () => {
    return (
        <body className="fondo">
        <div className="landing-page">
      <Link to={"/home"}>
            <button className="button">Dionisio Wines</button>
        </Link>
        {/* <h1 className="titulo">Dionisio Wines</h1> */}
      <video
         autoPlay 
         loop
          style= {{
            position: "absolute",
            width: "100%" ,
            height:"100%", 
            top:"0vw",
            objectFit:"cover",
            transform: "(-50%, -50%)",
            zIndex:-1,

             }}>
            <source src={Logo} type="video/mp4"></source>
        </video>
       
               </div>
               </body>
    );
}