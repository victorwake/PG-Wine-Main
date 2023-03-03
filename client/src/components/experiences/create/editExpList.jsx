// import './editList.css'
import { NavAdmin } from '../../navAdmin/NavAdmin'
import { useDispatch, useSelector } from 'react-redux'
import { Fragment, useEffect } from 'react'
import { nameASC } from '../../../helpers/sort'
import { getExp } from '../../../redux/actions'
import { ExpRow } from './expRow'

export const EditExpList = () => {
  const products = useSelector(state => state.experiences)
  const dispatch = useDispatch()

  const sortedProducts = [...products].sort(nameASC)

  useEffect(() => {
    if (!products.length) dispatch(getExp())
  }, [dispatch, products.length])

  return (
    <div>
      <NavAdmin />
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Tipo</th>
            <th scope="col">Precio</th>
            <th scope="col">Editar</th>
            <th scope="col">Activo</th>
          </tr>
        </thead>
        <tbody>
          {sortedProducts?.map(e => (
            <ExpRow exp={e} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
