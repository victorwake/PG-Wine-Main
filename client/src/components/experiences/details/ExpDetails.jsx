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

  // const expType = expDetail.kindOfExp;
  // let kindOfExp = "";
  // let kindName = "";

  // if (!!expType) {
  //   kindOfExp = expType.toLowerCase();
  //   kindName = expType.toUpperCase();
  // }

  useEffect(() => {
    dispatch(getExpDetail(id))
  }, [dispatch, id])

  return (
    <div>
      <div>
        <NavBar />
      </div>

      <div className={'card-container-home-' + clase}>
        {expDetail?.map(e => (
          <Fragment key={e.id}>
            <Link
              to={'/expDetails/' + e.id}
              style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
              <ExpCard name={e.name} kindOfExp={e.kindOfExp} image={e.image} price={e.price} />
            </Link>
          </Fragment>
        ))}
      </div>
    </div>
  )
}
