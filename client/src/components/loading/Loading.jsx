import './loading.css'

import React from 'react'
import loaderImg from '../../image/card/Loading-GIF.gif'

export const Loading = () => {
  // const clase= useSelector(store => store.theme);

  return (
    <div className="container-loading-general">
      <div className="container-loading">
        <img
          width="120px"
          height="120px"
          className="img-loading"
          src={loaderImg}
          alt="loading"
        ></img>
      </div>
    </div>
  )
}
