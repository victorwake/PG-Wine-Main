import './experiences.css'
import { useEffect, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getExp } from '../../../redux/actions'
import { NavBarExpType } from '../navBarExpType/NavBarExpType'
import { NavBar } from '../../navBar/NavBar'
import { ExpCard } from '../card/ExpCard'

export const Experiences = () => {
  const dispatch = useDispatch()
  const allExp = useSelector(state => state.experiences)
  const clase = useSelector(store => store.theme)

  useEffect(() => {
    if (!allExp.length) dispatch(getExp())
  }, [allExp.length, dispatch])

  return (
    <div className={'home-container-' + clase}>
      <div className="home_nav">
        <NavBar />
      </div>
      <NavBarExpType />
      <div className={'parrafo'}>
        <p>
          En la antigua Roma existía un proverbio que rezaba “In vino veritas”, en nuestra lengua
          sería literalmente “En el vino está la verdad”.
        </p>{' '}
        <p>
          {' '}
          En Dionisio creemos en esa verdad de una manera absoluta. El vino está lleno de verdades y
          realidades. Algunas de dichas certezas se pueden conocer al mero momento de descorchar una
          botella, pero otras solo pueden ser apreciadas si se llega al origen de todo.
        </p>
        <p>
          Ese origen es diverso y está lleno de historias. Por eso queremos invitarlos a transitar
          los caminos del vino en búsqueda de experiencias que puedan hacerlos sentir en persona sus
          propias verdades.
        </p>
      </div>
    </div>
  )
}
