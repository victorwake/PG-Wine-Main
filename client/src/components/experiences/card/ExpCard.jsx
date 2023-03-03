import './expCard.css'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

export const ExpCard = ({ name, price, kindOfExp, image, url }) => {
  //se lo paso por props
  const clase = useSelector(store => store.theme)
  const experiences = useSelector(store => store.experiences)

  return (
    <div className={'card-container-exp-' + clase}>
      <div className={'card-exp-' + clase}>
        {/* //////////////////////////////////////////// */}
        <div className={'img-card-exp-' + clase}>
          {/* <img height="200px" className={'img-' + clase} src={image[0]} alt={name} /> */}
          <div className="carousel">
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                {image.map(e => (
                  <div class="carousel-item active">
                    <img src={[e]} class="d-block w-100" alt="..." />
                  </div>
                ))}
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
              >
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
              >
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        {/* //////////////////////////////////////////// */}
        <div>
          <h2 className={'name-card-exp-' + clase}>{name}</h2>
        </div>
        <div>
          <h4 className={'type-exp-card-' + clase}>{kindOfExp} </h4>
        </div>
        <div>
          <h4 className={'url-card-' + clase}>{url}</h4>
        </div>
        <div>
          <h4 className={'price-card-' + clase}>{price} $</h4>
        </div>
      </div>
    </div>
  )
}
