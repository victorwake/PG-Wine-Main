import React from 'react'
import { Link } from 'react-router-dom'
import './landingPage.css'

export const LandingPage = () => {
  return (
    <div>
      <div class="landing-background">
        <div className="img-left"></div>
        <Link to="/home">
          {' '}
          <div className="img-center">Dionisio Wines</div>
        </Link>
        <div className="img-right"></div>
      </div>
    </div>
  )
}
