import { NavAdmin } from '../navAdmin/NavAdmin'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUsers } from '../../redux/actions'
import { UserRow } from './userRow'

export const UserList = () => {
  const dispatch = useDispatch()
  const usuarios = useSelector(state => state.users)

  useEffect(() => {
    if (!usuarios.length) dispatch(getUsers())
  }, [dispatch, usuarios.length])

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
          {usuarios?.map(u => (
            <UserRow user={u} />
          ))}
        </tbody>
      </table>
    </div>
  )
}