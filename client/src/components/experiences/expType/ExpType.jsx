import { useEffect, Fragment, useCallback, useState, useMemo } from 'react'
import './expType.css'
// import { Pagination } from '../../pagination/Pagination';
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

  // const filteredExp = useMemo(() => {
  //     return experiences
  // }, [experiences])
  // // Keep only the wines of the current page
  // const expPerPage = 3;
  // const pageExp = useMemo(() => {
  //     const indexLastExp = currentPage * expPerPage;
  //     const indexFirstExp = indexLastExp - expPerPage;
  //     return filteredExp.slice(indexFirstExp, indexLastExp)
  // }, [currentPage, filteredExp, expPerPage])

  useEffect(() => {
    dispatch(getExpType(type))
  }, [dispatch, type])

  return (
    <div className={'wine-container-' + clase}>
      <NavBar />
      {/* //     <h1 className={"wine-type-h1-" + clase}>Experiencias {type}</h1>
       //     <div className="pagination-container-type" >
       //         <Pagination experiences={filteredExp.length} expPerPage={expPerPage} />
       //     </div> */}

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
