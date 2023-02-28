import { NavAdmin } from '../navAdmin/NavAdmin'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getOrders } from '../../redux/actions'


export const OrderList = ({ user }) => {
  const dispatch = useDispatch()
  const orders = useSelector(state => state.orderUsers)
  const idUser = user.idUser


  useEffect(() => {
    if (!orders.length) dispatch(getOrders())
    console.log(orders)
  }, [dispatch, orders.length])
  // useEffect(() => {
  //   dispatch(getOrders(user.idUser))
  // }, [dispatch, user.idUser])

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
  {orders.map(order => (
    <tr key={order.id}>
      <td>{order.id}</td>
      <td>{order.idUser}</td>
      <td>{order.producto}</td>
      <td>{order.cantidad}</td>
      <td>{order.total}</td>
    </tr>
  ))}
</tbody>
      </table>
    </div>
  )
}