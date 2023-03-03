import { useEffect, Fragment, useCallback, useState, useMemo } from 'react'
import './expType.css'
import { useDispatch, useSelector } from 'react-redux'
import { NavBar } from '../../navBar/NavBar'
import { Link, useParams } from 'react-router-dom'
import { ExpCard } from '../card/ExpCard'
import { getExpType } from '../../../redux/actions'

export const ExpType = () => {
  const clase = useSelector(state => state.theme)
  const dispatch = useDispatch()
  const experiences = useSelector(state => state.expType)
  const { type } = useParams()

  useEffect(() => {
    dispatch(getExpType(type))
  }, [dispatch, type])

  return (
    <div className={'wine-container-' + clase}>
      <NavBar />

      <div className="wine-type">
        <div className={'card-container-wine-' + clase}>
          {experiences.map(e => (
            <Fragment className="fragment" key={e.type}>
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
    </div>
  )
}
