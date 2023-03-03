import './notFoundType.css'
import { useSelector } from 'react-redux'

export const NotFoundType = () => {
  const clase = useSelector(state => state.theme)

  return (
    <div className="notfound-type">
      <div className="notfound-padre-type">
        <h3 className={'no-found-type-' + clase}>Not Found</h3>
      </div>
    </div>
  )
}
