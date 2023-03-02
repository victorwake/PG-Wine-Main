// import './editList.css'
import { Link } from 'react-router-dom'
import { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateExp } from '../../../redux/actions'

export const ExpRow = ({ exp }) => {
  const dispatch = useDispatch()
  const [input, setInput] = useState({
    available: exp.available,
    name: exp.name,
    price: exp.price,
    image: exp.image,
    eventDate: exp.eventDate,
    url: exp.url,
    description: exp.description,
  })

  const handleChange = useCallback(() => {
    const newInput = {
      ...input,
      available: !input.available,
    }
    setInput(newInput)

    dispatch(updateExp(exp.id, newInput))
  }, [dispatch, input, exp.id])

  return (
    <tr key={exp.id}>
      <td>{exp.name}</td>
      <td>{exp.kindOfExp}</td>
      <td>$ {exp.price} </td>
      <td>
        <Link to={'/admin/experiencias/create/' + exp.id}>
          <button className="edit">
            <i class="bi bi-pencil-square"></i>
          </button>
        </Link>
      </td>
      <td>
        {exp.available === true ? (
          <button className="check" onClick={handleChange}>
            <i class="bi bi-check-circle" id="check"></i>
          </button>
        ) : (
          <button className="slash" onClick={handleChange}>
            <i class="bi bi-slash-circle"></i>
          </button>
        )}
      </td>
    </tr>
  )
}
