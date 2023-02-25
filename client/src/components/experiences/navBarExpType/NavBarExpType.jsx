import './navBarExpType.css'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const NavBarExpType = () => {
  const clase = useSelector(store => store.theme)

  return (
    <div className={'cards-wrappe-' + clase}>
      <Fragment>
        <div class="card-wrapper">
          <Link
            to={'/experiencias/' + 'hoteles'}
            style={{ color: 'inherit', textDecoration: 'inherit' }}
          >
            <div class="card-5 card-object card-object-hf">
              <fragment class="face front">
                <div class="title-wrapper">
                  <div class="title">Hoteles</div>
                  <div class="subtitle">Dionisio Wines</div>
                </div>
              </fragment>
            </div>
          </Link>
        </div>

        <div class="card-wrapper">
          <Link
            to={'/experiencias/' + 'blanco'}
            style={{ color: 'inherit', textDecoration: 'inherit' }}
          >
            <div class="card-6 card-object card-object-hf">
              <fragment class="face front">
                <div class="title-wrapper">
                  <div class="title-gas">Gastronomía</div>
                  <div class="subtitle">Dionisio Wines</div>
                </div>
              </fragment>
            </div>
          </Link>
        </div>

        <div class="card-wrapper">
          <Link
            to={'/experiencias/' + 'rosado'}
            style={{ color: 'inherit', textDecoration: 'inherit' }}
          >
            <div class="card-7 card-object card-object-hf">
              <fragment class="face front">
                <div class="title-wrapper">
                  <div class="title">Visitas Guiadas</div>
                  <div class="subtitle">Dionisio Wines</div>
                </div>
              </fragment>
            </div>
          </Link>
        </div>

        <div class="card-wrapper">
          <Link
            to={'/experiencias/' + 'espumante'}
            style={{ color: 'inherit', textDecoration: 'inherit' }}
          >
            <div class="card-8 card-object card-object-hf">
              <fragment class="face front">
                <div class="title-wrapper">
                  <span class="title">Degustación</span>
                  <span class="subtitle">Dionisio Wines</span>
                </div>
              </fragment>
            </div>
          </Link>
        </div>
      </Fragment>
    </div>
  )
}
