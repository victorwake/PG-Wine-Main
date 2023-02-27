import React, { useState } from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';
import './rating.css';

function Rating() {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    return (
        <div>
        {[...Array(5)].map ((star, i) => {
            const ratingValue = i + 1;
            return (
                <label>
                    <input 
                    type= 'radio' 
                    name= 'rating' 
                    value={ ratingValue} 
                    onClick={() => setRating(ratingValue)}/>
                    
                    <FaStar 
                        className= 'star' 
                        color={ ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'} 
                        size ={25}
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(null)}
                        />
                </label>
            );
        })}
        {/* <p>El puntaje es {rating}.</p> */}
        </div>
    )
}

export default Rating