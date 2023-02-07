import React, {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './create.css';
import {getWines, getVarietal, postWines } from '../../redux/actions';
//import { postWine } from '../../helpers/postWine';
import {formControl} from '../../helpers/formControl'

export const Create = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [err, setErr]= useState({});
    const varietal= useSelector((state) => state.varietal)
    //const color_type= useSelector((state) => state.color_type)

    //Form
    const[input, setInput]= useState({
        name: '',
        varietal: [],
        color_type: '',
        winery: '',
        price: '',
        alcohol: '',
        volume:'',
        image:'',
        year: '',
        province:'',
        region:'',
        url:'',
        description:'',
    });

    //Manejo de eventos

    if(!varietal.length){
        dispatch(getVarietal())
    }

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })

        setErr(formControl({
            ...input,
            [e.target.name]: e.target.value
        }))
        console.log(input)  //Para poder ver q se ingesen bien, despues lo saco
    }
    function handleVarietal(e){
        setInput({
               ...input,
               varietal: [...input.varietal, e.target.value]
            })
    }

    function handleColor(e){
        setInput({
                 ...input,                                                                                                          
                 color_type: [...input.color_type, e.target.value]
            })
        }
    function handleProvince(e){
        setInput({
                ...input,                                                                                                          
                province: [...input.province, e.target.value]
            })
        }
       
        let newObject= {
            name: input.name,
            varietal: input.varietal,
            color_type: input.color_type,
            alcohol: input.alcohol + '°',
            winery: input.winery,
            price: '$' + input.price,
            volume: input.volume + 'Cm3',
            year: input.year,
            province: input.province,
            region: input.region,
            url: input.url,
            description: input.description,
            image: input.image
        }

    function handleSubmit(e) {
            e.preventDefault(); 
            dispatch(postWines(newObject))  
            dispatch(getWines())    
            alert('Vino cargado correctamente!')  
            navigate('/home')    
        };
        const disabled = Object.keys(err).length


        //const sortedVarietal = varietal.sort((a, b) => a.name.localeCompare(b.name));

        return(
            <div className='create'>
                <Link as={Link} to='/home'>
                    <button className='backButton'>Home</button>
                </Link>
                <div>
                    <form className='form' onSubmit={(e) => handleSubmit(e)}>
                        <h2 className='title'>Cargá tu vino</h2>
                        <div>
                            <label className='label'>Nombre</label>
                            <input className='input' type='text' value={input.name} name='name' onChange={(e) => handleChange(e)}/>
                            {err.name && <span className='err'> {err.name}</span>}
                        </div>
    
                        <div>
                            <label className='label'>Varietal</label>
                            <select required onChange={(e)=> handleVarietal(e)}>
                            <option value="value" disabled="" hidden="" defaultValue=""> Varietal... </option>
                                {varietal.map(v =>(
                                    <option key={v.id} value={v.name}>{v.name}</option>
                                ))}
                            </select>
                                 {err.varietal && <span className='err'> {err.varietal}</span>}                        
                        </div>
    


                        <div>
                            <label className='label'>Color</label>
                            <input type= 'text' value={input.color_type}name='color_type' onChange={(e) => handleChange(e)}></input>
                            {err.color_type && <span className='err'> {err.color_type}</span>}
                        </div>

                        { <div>
                            <label className='label'>Color</label>
                            <select onChange={(e)=> handleColor(e)}>
                            <option value="value" disabled="" hidden="" defaultValue="">Tipo...</option>
                                <option value= 'Blanco'>Blanco</option>
                                <option value='Tinto'>Tinto</option>
                                <option value='Rosado'>Rosado</option>
                                <option value='Espumante'>Espumante</option>
                            </select>
                            {err.color_type && <span className='err'> {err.color_type}</span>} 
                        </div> }
    
                        <div>
                            <label className='label'>Graduación alcohólica</label>
                            <input type= 'float' value={input.alcohol}name='alcohol' onChange={(e) => handleChange(e)}/>
                            {err.alcohol && <span className='err'> {err.alcohol}</span>}

                        </div>
    
                        <div>
                            <label className='label'>Bodega</label>
                            <input type= 'text' value={input.winery}name='winery' onChange={(e) => handleChange(e)} ></input>
                            {err.winery && <span className='err'> {err.winery}</span>}
                        </div>
    
                        <div>
                            <label className='label'>Precio</label>
                            <input type= 'float' value={input.price}name='price' onChange={(e) => handleChange(e)} ></input>
                            {err.price && <span className='err'> {err.price}</span>}
                        </div>
    
                        <div>
                            <label className='label'>Volumen</label>
                            <input type= 'number' value={input.volume}name='volume' onChange={(e) => handleChange(e)}></input>
                            {err.volume && <span className='err'> {err.volume}</span>}
                        </div>

                        <div>
                            <label className='label'>Año de elaboración</label>
                            <input type= 'number' value={input.year}name='year' onChange={(e) => handleChange(e)}></input>
                            {err.year && <span className='err'> {err.year}</span>}
                        </div>


                        <div>
                            <label className='label'>Provincia</label>
                            <input type= 'text' value={input.province}name='province' onChange={(e) => handleChange(e)}></input>
                            {err.province && <span className='err'> {err.province}</span>}
                        </div>
                        { <div>
                            <label className='label'>Provincia de origen</label>
                            <select onChange={(e)=> handleProvince(e)}>
                            <option value="value" disabled="" hidden="" defaultValue="">Provincia...</option>
                                <option value='Buenos Aires'>Buenos Aires</option>
                                <option value='Catamarca'>Catamarca</option>
                                <option value='Chaco'>Chaco</option>
                                <option value='Chubut'>Chubut</option>
                                <option value= 'Córdoba'>Córdoba</option>
                                <option value='Corrientes'>Corrientes</option>
                                <option value='Formosa'>Formosa</option>
                                <option value='Jujuy'>Jujuy</option>
                                <option value='La Pampa'>La Pampa</option>
                                <option value='Mendoza'>Mendoza</option>
                                <option value= 'Misiones'>Misiones</option>
                                <option value= 'Neuquén'>Neuquén</option>
                                <option value='Rio Negro'>Rio Negro</option>
                                <option value='Santa Cruz'>Santa Cruz</option>
                                <option value='San Luis'>San Luis</option>
                                <option value= 'Tierra del Fuego'>Tierra del Fuego</option>
                                <option value='Salta'>Salta</option>
                                <option value='San Juan'>San Juan</option>
                                <option value='Santa Fé'>Santa Fé</option>
                                <option value='Santiago del Estero'>Santiago del Estero</option>
                                <option value='Tucumán'>Tucumán</option>
                            </select>
                            {err.province && <span className='err'> {err.province}</span>}
                        </div> }

                        <div>
                            <label className='label'>Región de origen</label>
                            <input type= 'text' value={input.region}name='region' onChange={(e) => handleChange(e)}></input>
                            {err.region && <span className='err'> {err.region}</span>}
                        </div>

                        <div>
                            <label className='label'>Página de la bodega</label>
                            <input type= 'text' value={input.url}name='url' onChange={(e) => handleChange(e)} ></input>
                            {err.url && <span className='err'> {err.url}</span>}
                        </div>

                        <div>
                            <label className='label'>Descripción</label>
                            <input type= 'text' value={input.description}name='description' onChange={(e) => handleChange(e)}></input>
                            {err.description && <span className='err'> {err.description}</span>}
                        </div>

                        {/* <div>
                            <label className='label'>Imagen del producto</label>
                            <input type= 'text' value={input.image}name='image' onChange={(e) => handleChange(e)}></input>
                            {err.image && <span className='err'> {err.image}</span>}
                        </div> */}
                        <div>
                    <input className='input'
                    placeholder='Image'
                    type= 'img'
                    value= {input.image}
                    name= 'image'
                    alt= 'not found'
                    onChange={(e) => handleChange(e)}
                    />
                    {err.image && (
                        <p className='err'>{err.image}</p>
                    )}
                </div>
    
                    <div>
                            <button disabled={disabled} className='submit' type='submit'>CREATE</button>
                        
                    </div>
                    </form>
    
                </div>
            </div>
        )
}