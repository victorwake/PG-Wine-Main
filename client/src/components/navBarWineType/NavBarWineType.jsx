
import './navBarWineType.css'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


export const NavBarWineType = () => {
  const clase = useSelector(store => store.theme)

  return (
    <div className={'cards-wrappe-' + clase}>
      <Fragment>
        <div class="card-wrapper">
          <Link to={'/vinos/' + 'tinto'} style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <div class="card-1 card-object card-object-hf">
              <fragment class="face front">
                <div class="title-wrapper">
                  <div class="title">Tintos</div>
                  <div class="subtitle">Dionisio Wines</div>
                </div>
              </fragment>
            </div>
          </Link>
        </div>

        <div class="card-wrapper">
          <Link to={'/vinos/' + 'blanco'} style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <div class="card-2 card-object card-object-hf">
              <fragment class="face front">
                <div class="title-wrapper">
                  <div class="title">Blancos</div>
                  <div class="subtitle">Dionisio Wines</div>
                </div>
              </fragment>
            </div>
          </Link>
        </div>

        <div class="card-wrapper">
          <Link to={'/vinos/' + 'rosado'} style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <div class="card-3 card-object card-object-hf">
              <fragment class="face front">
                <div class="title-wrapper">
                  <div class="title">Rosados</div>
                  <div class="subtitle">Dionisio Wines</div>
                </div>
              </fragment>
            </div>
          </Link>
        </div>

        <div class="card-wrapper">
          <Link
            to={'/vinos/' + 'espumante'}
            style={{ color: 'inherit', textDecoration: 'inherit' }}
          >
            <div class="card-4 card-object card-object-hf">
              <fragment class="face front">
                <div class="title-wrapper">
                  <span class="title">Espumantes</span>
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
