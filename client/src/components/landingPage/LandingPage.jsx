import React from "react";
import { Link } from "react-router-dom";
import './landingPage.css';

export const LandingPage = () => {
    return (
        <div className="landing-page">
        <h1>Landing Page</h1>

        <Link to={"/general"}>
            <button className="button">Dionisio Wine</button>
        </Link>
        </div>
    );
}
