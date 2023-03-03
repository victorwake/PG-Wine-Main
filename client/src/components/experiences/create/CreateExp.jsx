import React, { useState, useEffect, useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// import './createExp.css'
import { getExpDetail, getExpType, postExp, updateExp } from '../../../redux/actions'
import { Cloudinary } from '../../cloudinary/Cloudinary'
import { formControl } from '../../../helpers/formControl'
import { NavAdmin } from '../../navAdmin/NavAdmin'

export const CreateExp = () => {
  const urlCloudinary = useSelector(state => state.urlCloudinary)
  const clase = useSelector(store => store.theme)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [err, setErr] = useState({})
  const [input, setInput] = useState({
    name: '',
    price: '',
    ubication: '',
    kindOfExp: '',
    image: [],
    url: '',
    description: '',
    eventDate: '',
  })

  const experiencias = useSelector(state => state.expType)
  const { id } = useParams()
  const expDetail = useSelector(state => state.expDetail)

  useEffect(() => {
    if (!experiencias.length) {
      dispatch(getExpType())
    }
  }, [dispatch, experiencias.length])

  useEffect(() => {
    if (id) {
      dispatch(getExpDetail(id))
    }
  }, [dispatch, id])

  useEffect(() => {
    if (expDetail && id) {
      setInput(expDetail)
    }
  }, [expDetail, id])

  useEffect(() => {
    if (urlCloudinary) {
      setInput(prevInput => ({
        ...prevInput,
        image: urlCloudinary,
      }))
    }
  }, [urlCloudinary])

  const handleChange = useCallback(
    e => {
      setInput(prevInput => ({
        ...prevInput,
        [e.target.name]:
          typeof e.target.value === 'number'
            ? e.target.value
            : e.target.value.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase()),
      }))

      setErr(
        formControl({
          ...input,
          [e.target.name]: e.target.value,
        }),
      )
    },
    [input],
  )

  const handleChangeUrl = useCallback(
    e => {
      setInput(prevInput => ({
        ...prevInput,
        [e.target.name]: e.target.value,
      }))

      setErr(
        formControl({
          ...input,
          [e.target.name]: e.target.value,
        }),
      )
    },
    [input],
  )

  const handleSubmit = useCallback(
    e => {
      e.preventDefault()
      if (id) {
        dispatch(updateExp(id, input))
        alert('Experiencia editada correctamente!')
      } else {
        dispatch(postExp(input))
        alert('Experiencia cargada correctamente!')
      }
      navigate('/admin')
    },
    [dispatch, id, input, navigate],
  )

  const disabled = Object.keys(err).length || !input.name

  return (
    <div>
      <NavAdmin />
      <div>
        <div className={'admin-container-' + clase}>
          <form onSubmit={e => handleSubmit(e)}>
            <h2 className={'sale-type-h2-' + clase}>Cargá tu experiencia</h2>
            <div className={'card-container-admin-' + clase}>
              <fragment className="fragment-create-1">
                <div>
                  <div>
                    <label className="label">Nombre</label>
                    <input
                      class="u-full-width"
                      type="text"
                      value={input.name}
                      name="name"
                      onChange={e => handleChange(e)}
                    />
                    {err.name && <span className="err"> {err.name}</span>}
                  </div>
                  <div>
                    <label className="label">Experiencia</label>
                    <select
                      class="u-full-width"
                      id="kindOfExp"
                      name="kindOfExp"
                      value={input.kindOfExp}
                      onChange={e => handleChange(e)}
                    >
                      <option value="hoteles" disabled="" defaultValue="">
                        Experiencias
                      </option>
                      <option value="hoteles" disabled="" defaultValue="">
                        Hoteles
                      </option>
                      <option value="gastronomia" disabled="" defaultValue="">
                        Gastronomia
                      </option>
                      <option value="visitas" disabled="" defaultValue="">
                        Visitas Guiadas
                      </option>
                      <option value="degustacion" disabled="" defaultValue="">
                        Desgustacion
                      </option>
                    </select>
                    {err.kindOfExp && <span className="err"> {err.kindOfExp}</span>}
                  </div>
                  <div>
                    <label className="label">Descripción</label>
                    <textarea
                      type="text"
                      class="u-full-width"
                      value={input.description}
                      name="description"
                      onChange={e => handleChange(e)}
                    ></textarea>
                    {err.description && <span className="err"> {err.description}</span>}
                  </div>
                  <div>
                    <label className="label">ubication</label>
                    <input
                      class="u-full-width"
                      type="text"
                      value={input.ubication}
                      name="ubication"
                      onChange={e => handleChange(e)}
                    ></input>
                    {err.ubication && <span className="err"> {err.ubication}</span>}
                  </div>
                  <div>
                    <label className="label">Página de la experiencia</label>
                    <input
                      class="u-full-width"
                      type="text"
                      value={input.url}
                      name="url"
                      onChange={e => handleChangeUrl(e)}
                    ></input>
                    {err.url && <span className="err"> {err.url}</span>}
                  </div>
                  <div>
                    <label className="label">Precio</label>
                    <input
                      class="u-full-width"
                      type="float"
                      value={input.price}
                      name="price"
                      onChange={e => handleChange(e)}
                    ></input>
                    {err.price && <span className="err"> {err.price}</span>}
                  </div>
                  <Cloudinary />
                  <div>
                    <input
                      class="u-full-width"
                      placeholder="Muestra si se cargo la Url de la imagen"
                      type="img"
                      value={input.image}
                      name="image"
                      alt="not found"
                      onChange={e => handleChange(e)}
                    />
                    {err.image && <p className="err">{err.image}</p>}
                  </div>
                  <button disabled={disabled} className={'submit'}>
                    {id ? 'ACTUALIZAR' : 'CREAR'}
                  </button>
                </div>
              </fragment>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
