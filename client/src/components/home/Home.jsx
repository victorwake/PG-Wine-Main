import './home.css'
import { NavBar } from '../navBar/NavBar'
import { NavBarWineType } from '../navBarWineType/NavBarWineType'
import { Carousel } from '../carousel/Carousel'
import { useEffect, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWines, cleanStateByName, changeSearchWine } from '../../redux/actions'
import { Card } from '../card/Card'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import { Footer } from '../footer/Footer'
import { Loading } from '../loading/Loading'
import { NotFound } from '../notFound/NotFound'

export const Home = () => {
  const dispatch = useDispatch()
  const allWines = useSelector(state => state.wines)
  const clase = useSelector(store => store.theme)
  const searchWine = useSelector(state => state.searchWine)
  const wineByName = useSelector(state => state.wineByName)

  const shuffledWines = _.shuffle(allWines)
  const tenRandomWines = shuffledWines.slice(0, 8)

  let notFound = false
  if (searchWine && wineByName.length === 0) {
    notFound = true
  }

  let wineHome = []
  if (searchWine) {
    wineHome = wineByName
  } else {
    wineHome = tenRandomWines
  }

  //Lo usariamos cuando tengamos los filtros, se cambiaria el allWines.slide por este

  let loading = false
  if (!allWines.length) loading = true

  useEffect(() => {
    if (!allWines.length) dispatch(getWines())
  }, [])

  useEffect(() => {
    return () => {
      dispatch(cleanStateByName([]))
      dispatch(changeSearchWine(false))
    }
  }, [dispatch])

  return (
    <div className={'home-container-' + clase}>
      <div className="home_nav">
        <NavBar />
      </div>
      <NavBarWineType />
      <Carousel />
      <hr></hr>
      <div className={'card-container-home-' + clase}>
        {loading && <Loading />}
        {notFound && <NotFound />}
        {!loading &&
          wineHome?.map(w => (
            <Fragment key={w.id}>
              <Link to={'/details/' + w.id} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                <Card
                  name={w.name}
                  varietal={w.varietal}
                  image={w.image}
                  winery={w.winery}
                  price={`$${w.price}`}
                />
              </Link>
            </Fragment>
          ))}
      </div>
      <Footer />
    </div>
  )
}
