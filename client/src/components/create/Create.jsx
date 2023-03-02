import React, { useState, useEffect, useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './create.css'
import { getWineDetail, getVarietal, postWines, updateWine } from '../../redux/actions'
import { Cloudinary } from '../cloudinary/Cloudinary'
import { formControl } from '../../helpers/formControl'
import { NavAdmin } from '../navAdmin/NavAdmin'

export const Create = () => {
  const urlCloudinary = useSelector(state => state.urlCloudinary)
  const clase = useSelector(store => store.theme)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [err, setErr] = useState({})
  const [input, setInput] = useState({
    name: '',
    varietal: '',
    color_type: '',
    winery: '',
    price: '',
    alcohol: '',
    volume: '',
    image: '',
    year: '',
    province: '',
    region: '',
    url: '',
    description: '',
    stock: '',
  })

  const varietal = useSelector(state => state.varietal)
  const { id } = useParams()
  const wineDetail = useSelector(state => state.wineDetail)

  useEffect(() => {
    if (id) {
      dispatch(getWineDetail(id))
    }
  }, [dispatch, id])

  useEffect(() => {
    if (!varietal.length) {
      dispatch(getVarietal())
    }
  }, [dispatch, varietal.length])

  useEffect(() => {
    if (wineDetail && id) {
      setInput(wineDetail)
    }
  }, [wineDetail, id])

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
        dispatch(updateWine(id, input))
        alert('Vino editado correctamente!')
      } else {
        dispatch(postWines(input))
        alert('Vino cargado correctamente!')
      }
      navigate('/admin')
    },
    [dispatch, id, input, navigate],
  )

  const disabled = Object.keys(err).length || !input.name

  return (
    <div>
      <div>
        <NavAdmin />
        <div className={'admin-container-' + clase}>
          <form onSubmit={e => handleSubmit(e)}>
            <h2 className={'sale-type-h2-' + clase}>Cargá tu vino</h2>
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
                    <label className="label">Varietal</label>
                    <select
                      class="u-full-width"
                      id="varietal"
                      name="varietal"
                      value={input.varietal}
                      onChange={e => handleChange(e)}
                    >
                      <option value="value" disabled="" hidden="" defaultValue="">
                        Varietal...
                      </option>
                      {varietal.map(v => (
                        <option key={v.id} value={v.name}>
                          {v.name}
                        </option>
                      ))}
                    </select>
                    {err.varietal && <span className="err"> {err.varietal}</span>}
                  </div>

                  <div>
                    <label className="label">Color</label>
                    <input
                      class="u-full-width"
                      type="text"
                      value={input.color_type}
                      name="color_type"
                      onChange={e => handleChange(e)}
                    ></input>
                    {err.color_type && <span className="err"> {err.color_type}</span>}
                  </div>

                  <div>
                    <label className="label">Graduación alcohólica</label>
                    <input
                      class="u-full-width"
                      type="float"
                      value={input.alcohol}
                      name="alcohol"
                      onChange={e => handleChange(e)}
                    />
                    {err.alcohol && <span className="err"> {err.alcohol}</span>}
                  </div>

                  <div>
                    <label className="label">Bodega</label>
                    <input
                      class="u-full-width"
                      type="text"
                      value={input.winery}
                      name="winery"
                      onChange={e => handleChange(e)}
                    ></input>
                    {err.winery && <span className="err"> {err.winery}</span>}
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

                  <div>
                    <label className="label">Volumen</label>
                    <input
                      class="u-full-width"
                      type="number"
                      value={input.volume}
                      name="volume"
                      onChange={e => handleChange(e)}
                    ></input>
                    {err.volume && <span className="err"> {err.volume}</span>}
                  </div>
                  <div>
                    <label className="label">Stock</label>
                    <input
                      class="u-full-width"
                      type="number"
                      value={input.stock}
                      name="stock"
                      onChange={e => handleChange(e)}
                    ></input>
                    {err.stock && <span className="err"> {err.stock}</span>}
                  </div>
                </div>
              </fragment>
              <fragment className="fragment-create-2">
                <div>
                  <div>
                    <label className="label">Año de elaboración</label>
                    <input
                      class="u-full-width"
                      type="number"
                      value={input.year}
                      name="year"
                      onChange={e => handleChange(e)}
                    ></input>
                    {err.year && <span className="err"> {err.year}</span>}
                  </div>

                  <div>
                    <label className="label">Provincia</label>
                    <input
                      class="u-full-width"
                      type="text"
                      value={input.province}
                      name="province"
                      onChange={e => handleChange(e)}
                    ></input>
                    {err.province && <span className="err"> {err.province}</span>}
                  </div>

                  <div>
                    <label className="label">Región de origen</label>
                    <input
                      class="u-full-width"
                      type="text"
                      value={input.region}
                      name="region"
                      onChange={e => handleChange(e)}
                    ></input>
                    {err.region && <span className="err"> {err.region}</span>}
                  </div>

                  <div>
                    <label className="label">Página de la bodega</label>
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
                </div>
                <div></div>
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
              </fragment>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
