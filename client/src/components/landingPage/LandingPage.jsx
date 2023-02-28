import React from "react";
import { Link } from "react-router-dom";
import './landingPage.css';
import Logo from "../landingPage/Logo.mp4"

export const LandingPage = () => {
    return (
     <div className="fondo">
     <div class="main">
     
     <div class="d2"></div>
     <Link to='/home'> <div class="d3">Dionisio Wines</div></Link>
      <div class="d4"></div>
  </div>
  </div>
    );
}