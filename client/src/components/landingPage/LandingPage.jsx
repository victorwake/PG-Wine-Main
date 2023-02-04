import './landingPage.css';
import { Link } from "react-router-dom";

export const LandingPage = () => {
    return (
        <div className="landing-page">
        <h1>Landing Page</h1>
        <Link to="/home">Home</Link>
        </div>
    );
}
