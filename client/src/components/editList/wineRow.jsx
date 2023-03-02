import './editList.css'
import { Link } from 'react-router-dom'
import { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getUsers, updateWine } from '../../redux/actions'
import { getWines } from '../../redux/actions'

export const WineRow = ({ wine }) => {
  const dispatch = useDispatch()
  const [input, setInput] = useState({
    id: wine.id,
    available: wine.available,
    name: wine.name,
    varietal: wine.varietal,
    color_type: wine.color_type,
    winery: wine.winery,
    price: wine.price,
    image: wine.image,
    url: wine.url,
    description: wine.description,
    promotion: wine.promotion,
  })

  const handleChange = useCallback(() => {
    const newInput = {
      ...input,
      available: !input.available,
    }
    setInput(newInput)

    dispatch(updateWine(wine.id, newInput))
  }, [dispatch, input, wine.id])

  const handlePromotion = useCallback(() => {
    const newInput = {
      ...input,
      promotion: !input.promotion,
    }
    setInput(newInput)

    dispatch(updateWine(wine.id, newInput))
  }, [dispatch, input, wine.id])

  return (
    <tr key={wine.id}>
      <td>{wine.winery}</td>
      <td>{wine.name}</td>
      <td>{wine.varietal}</td>
      <td>$ {wine.price} </td>
      <td>{wine.stock}</td>
      <td>
        <Link to={'/admin/create/' + wine.id}>
          <button className="edit">
            <i class="bi bi-pencil-square"></i>
          </button>
        </Link>
      </td>
      <td>
        {wine.available === true ? (
          <button className="check" onClick={handleChange}>
            <i class="bi bi-check-circle" id="check"></i>
          </button>
        ) : (
          <button className="slash" onClick={handleChange}>
            <i class="bi bi-slash-circle"></i>
          </button>
        )}
      </td>
      <td>
        {wine.promotion ? (
          <button onClick={handlePromotion}>
            <i class="bi bi-percent"></i>
          </button>
        ) : (
          <button onClick={handlePromotion}>
            <i class="bi bi-slash-square"></i>
          </button>
        )}
      </td>
    </tr>
  )
}
