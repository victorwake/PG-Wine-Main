import { NavAdmin } from '../navAdmin/NavAdmin'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getOrden } from '../../redux/actions'
import { useParams } from 'react-router-dom';


export const OrderList = ({ user }) => {
  const dispatch = useDispatch()
  const orders = useSelector((state )=> state.orderUsers);
  const { id } = useParams();


  useEffect(() => {
    dispatch(getOrden(id))
  }, [dispatch, id])

  console.log(orders)
  // useEffect((idUser) => {
  //   if (!orders.length) dispatch(getOrders(idUser))
  // }, [dispatch, orders.length, idUser])

  return (
    <div>
      <NavAdmin />
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Id Usuario</th>
            <th scope="col">Id Pago</th>
            <th scope="col">Monto Compra</th>
            {/* <th scope="col">Domicilio de envio</th> */}
            <th scope="col">Items Compra</th>
            <th scope="col">Email</th>
            <th scope="col">Estado Compra</th>
          </tr>
        </thead>
        <tbody>
  {orders.ordenes && orders.ordenes.map(order => (
    <tr key={order.id}>
      <td>{order.idUser}</td>
      <td>{order.payment_id}</td>
      <td>{order.ammount}</td>
      {/* <td>{order.shipping_address}</td> */}
      <td>{order.items}</td>
      <td>{order.order_email}</td>
      <td>{order.order_status}</td>
    </tr>
  ))}
</tbody>
      </table>
    </div>
  )
}
