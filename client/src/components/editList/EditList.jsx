import './editList.css'
import { NavAdmin } from '../navAdmin/NavAdmin'
import { useDispatch, useSelector } from 'react-redux'
import { Fragment, useEffect } from 'react'
import { getWines } from '../../redux/actions'
import { Link } from 'react-router-dom'
import { nameASC } from '../../helpers/sort.js'

export const EditList = () => {
  const products = useSelector(state => state.wines)
  const dispatch = useDispatch()

  const sortedProducts = [...products].sort(nameASC)

  useEffect(() => {
    if (!products.length) dispatch(getWines())
  }, [dispatch, products.length])

  return (
    <div>
      <NavAdmin />
      <table class="table table-hover">
        <thead>
          <tr>
            {/* <th scope="col">ID</th> */}
            <td></td>
            <th scope="col">Bodega</th>
            <th scope="col">Nombre</th>
            <th scope="col">Varietal</th>
            <th scope="col">Precio</th>
            <th scope="col">Stock</th>
            <th scope="col">Editar</th>
            <th scope="col">Suspender</th>
            <th scope="col">Descuento</th>
          </tr>
        </thead>
        <tbody>
          {sortedProducts?.map(w => (
            <Fragment key={w.id}>
              <tr>
                {/* <th scope="row">{w.id}</th> */}
                <td></td>
                <td>{w.winery}</td>
                <td>{w.name}</td>
                <td>{w.varietal}</td>
                <td>$ {w.price} </td>
                <td>{w.stock}</td>
                <Link to={'/admin/create/' + w.id}>
                  <td>
                    <button>
                      <i class="bi bi-pencil-square"></i>
                    </button>
                  </td>
                </Link>
                <td>
                  <button>
                    <i class="bi bi-slash-square"></i>
                  </button>
                </td>
                <td>
                  <button>
                    <i class="bi bi-slash-square"></i>
                  </button>
                </td>
              </tr>
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  )
}