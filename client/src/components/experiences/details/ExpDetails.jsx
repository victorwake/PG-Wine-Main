import './expDetails.css'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState, Fragment } from 'react'
import { NavBar } from '../../navBar/NavBar'
import { ExpCard } from '../card/ExpCard'

import { postExp, updateExp, getExp, getExpType, getExpDetail } from '../../../redux/actions'

export const ExpDetails = () => {
  const clase = useSelector(state => state.theme)
  const expDetail = useSelector(state => state.expDetail)
  const dispatch = useDispatch()
  const { id } = useParams()
  const allExp = useSelector(state => state.experiences)

  const expType = expDetail.kindOfExp;
  let kindOfExp = "";
  let kindName = "";

  if (!!expType) {
    kindOfExp = expType.toLowerCase();
    kindName = expType.toUpperCase();
  }

  useEffect(() => {
    dispatch(getExpDetail(id))
  }, [dispatch, id])

  return (
    <div className={"exp-detail-container-" + clase}>
      <NavBar/>
      
      <div className='exp-data-container-'>
        <div className='boton-volver-'>
      <Link to={`/experiences/${kindOfExp}`}>
            {" "}
            <button id={"agregar-exp-" + clase} className="buttonBack">
              <i class="bi bi-arrow-return-left"></i> Volver{" "}
            </button>
          </Link>
          </div>
        <div className='exp-card-container-'>

        </div>

      </div>
    </div>
  )
}