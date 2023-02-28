import './rating.css';
import copaMide from '../../image/wineIco/wine-mide.png';
import copaVacia from '../../image/wineIco/wine-empty.png';
import copaLlena from '../../image/wineIco/wine-full.png';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postRating, getRating } from '../../redux/actions';



export const Rating = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.usuario)
    const wineId = useSelector((state) => state.wineDetail);
    const rating = useSelector(state => state.rating);
    const averageStars = rating ? rating.averageStars : 0;
    const [localAverageStars, setLocalAverageStars] = useState(0);

    useEffect(() => {
        dispatch(getRating(wineId.id));
    }, [dispatch, wineId.id, averageStars]);

    useEffect(() => {
        if (rating && rating.averageStars) {
            setLocalAverageStars(rating.averageStars.toFixed(1));
        }
    }, [rating]);


    const [ratingValue, setRatingValue] = useState(0)
    const [hover, setHover] = useState(null)

    const handleRating = (e) => {
        const newRating = e.target.dataset.value;
        setRatingValue(newRating);
        dispatch(postRating(wineId.id, ratingValue));
    }
    console.log(averageStars , "ratin")
    console.log(localAverageStars, "rating del estado")
    
    

    return (
        <div className="rating">
            <span>
                <img id="rating-1" className="wine-glass" 
                src={averageStars >= 1 ? copaLlena : averageStars >= 0.5 ? copaMide : copaVacia} 
                alt="copa" 
                onMouseEnter={() => setHover(1)}
                onMouseLeave={() => setHover(null)}
                onClick={handleRating}
                data-value={1}
                />
            </span>
            <span>
                <img id="rating-2" className="wine-glass" 
                src={averageStars >= 2 ? copaLlena : averageStars >= 1.5 ? copaMide : copaVacia} 
                alt="copa"
                onMouseEnter={() => setHover(2)}
                onMouseLeave={() => setHover(null)}
                onClick={handleRating}
                data-value={2}
                />
            </span>
            <span>
                <img id="rating-3" className="wine-glass" 
                src={averageStars >= 3 ? copaLlena : averageStars >= 2.5 ? copaMide : copaVacia} 
                alt="copa"
                onMouseEnter={() => setHover(3)}
                onMouseLeave={() => setHover(null)}
                onClick={handleRating}
                data-value={3}
                />
            </span>
            <span>
                <img id="rating-4" className="wine-glass" 
                src={averageStars >= 4 ? copaLlena : averageStars >= 3.5 ? copaMide : copaVacia} 
                alt="copa" 
                onMouseEnter={() => setHover(4)}
                onMouseLeave={() => setHover(null)}
                onClick={handleRating}
                data-value={4}
                />
            </span>
            <span>
                <img id="rating-5" className="wine-glass" 
                src={averageStars >= 5 ? copaLlena : averageStars >= 4.5 ? copaMide : copaVacia} 
                alt="copa" 
                onMouseEnter={() => setHover(5)}
                onMouseLeave={() => setHover(null)}
                onClick={handleRating}
                data-value={5}
                />
            </span>
        </div>
    )
}