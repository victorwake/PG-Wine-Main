import { NavAdmin } from '../navAdmin/NavAdmin'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getOrders } from '../../redux/actions'

export const OrderList = () => {
  const dispatch = useDispatch()
  const orders = useSelector(state => state.orders)

  useEffect(() => {
    if (!orders.length) dispatch(getOrders())
    console.log(orders)
  }, [dispatch, orders.length])

  return (
    <div>
      <NavAdmin />
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Email</th>
            <th scope="col">Estado</th>
            <th scope="col">Rol</th>
            <th scope="col">Aplicar Cambios</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
          <li key={order.id}>
            <p>ID de orden: {order.id}</p>
            <p>Usuario: {order.idUser}</p>
            <p>Producto: {order.producto}</p>
            <p>Cantidad: {order.cantidad}</p>
            <p>Total: {order.total}</p>
          </li>))}
        </tbody>
      </table>
    </div>
  )
}