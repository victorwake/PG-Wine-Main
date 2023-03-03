import React from 'react'
import { FaWineGlassAlt, FaWineGlass } from 'react-icons/fa'
import { GiWineGlass } from 'react-icons/gi'
import './ratingStar.css'

function RatingStar({ glasses, numOfReviews }) {
  const ratingStar = Array.from({ length: 5 }, (element, index) => {
    let number = index + 0.5

    return (
      <span key={index}>
        {glasses >= index + 1 ? (
          <FaWineGlass className="icon" style={{ color: '#56050b' }} />
        ) : glasses >= number ? (
          <FaWineGlassAlt className="icon" style={{ color: '#56050b' }} />
        ) : (
          <GiWineGlass className="icon" />
        )}
      </span>
    )
  })

  return (
    <>
      <div className="rating-comments">
        {ratingStar} <p className="rating-comments">{numOfReviews}</p>
      </div>
    </>
  )
}

export default RatingStar
