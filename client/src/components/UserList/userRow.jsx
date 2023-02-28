import { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { updateUser } from '../../redux/actions'

export const UserRow = ({ user }) => {
  const distpach = useDispatch()
  const [editMode, setEditMode] = useState(false)
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState({
    status: user.status,
    rol: user.rol,
  })

  const handleChange = useCallback(e => {
    setInput(prevInput => ({
      ...prevInput,
      [e.target.name]: e.target.value,
    }))
  }, [])

  const estados = ['active', 'banned', 'deleted']
  const roles = ['ADMIN_ROLE', 'USER_ROLE', 'GUEST_ROLE']
  const id = user.idUser

  const handleDiscardChanges = useCallback(() => {
    setInput({
      status: user.status,
      rol: user.rol,
    })
    setEditMode(false)
  }, [user.rol, user.status])

  const handleSubmit = useCallback(
    e => {
      e.preventDefault()
      setLoading(true)

      console.log(input)
      console.log(user.idUser)

      if (!window.confirm('Esta seguro que desea editar al usuario')) {
        setLoading(false)
        return
      }

      distpach(updateUser(id, input))
      setLoading(false)
      setEditMode(false)
    },
    [distpach, id, input, user.idUser],
  )

  return (
    <tr key={user.idUser}>
      <td>{user.idUser}</td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.email}</td>
      <td>
        {editMode ? (
          <select
            className={'select-filter-'}
            id="status"
            name="status"
            value={input.status}
            onChange={e => handleChange(e)}
          >
            <option value="value" disabled defaultValue="" id={user.idUser}>
              Estado
            </option>
            {estados.map(s => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        ) : (
          user.status
        )}
      </td>
      <td>
        {editMode ? (
          <select
            className={'select-filter-'}
            id="rol"
            name="rol"
            value={input.rol}
            onChange={e => handleChange(e)}
          >
            <option value="value" disabled defaultValue="">
              Rol
            </option>
            {roles.map(r => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        ) : (
          user.rol
        )}
      </td>
      <td>
        {loading && <>Guardando</>}
        {!loading &&
          (editMode ? (
            <>
              <button onClick={handleDiscardChanges}>
                <i class="bi bi-x"></i>
              </button>
              <button onClick={e => handleSubmit(e)}>
                <i class="bi bi-check"></i>
              </button>
            </>
          ) : (
            <button onClick={e => setEditMode(true)}>
              <i class="bi bi-pencil-square"></i>
            </button>
          ))}
      </td>
    </tr>
  )
}