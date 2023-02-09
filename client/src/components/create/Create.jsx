import React, {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './create.css';
import { getWines, getVarietal, postWines } from '../../redux/actions';
// import { postWine } from '../../helpers/postWine';
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
        stock: 1
    });

    //Manejo de eventos

    if(!varietal){
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

    function handleSubmit(e) {
            e.preventDefault(); 
            dispatch(postWines(input))  
            // dispatch(getWines())
            setInput({
                name: '',
                varietal: '',
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
                stock: 1,
            })    
            alert('Vino cargado correctamente!')  
            navigate('/home')    
        };
        const disabled = Object.keys(err).length


        return(
            <div className='create'>
                <div className='left'>
                <Link as={Link} to='/home'>
                    <button className='backButton'>Volver a inicio</button>
                </Link>
                </div>
                <div className='center'>
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
                            <option className='input' value="value" disabled="" hidden="" defaultValue=""> Varietal... </option>
                                {/* {varietal.map(v =>(
                                    <option key={v.id} value={v.name}>{v.name}</option>
                                ))} */}
                            </select>
                                 {err.varietal && <span className='err'> {err.varietal}</span>}                        
                        </div>
    


                        <div>
                            <label className='label'>Color</label>
                            <input className='input' type= 'text' value={input.color_type}name='color_type' onChange={(e) => handleChange(e)}></input>
                            {err.color_type && <span className='err'> {err.color_type}</span>}
                        </div>
    
                        <div>
                            <label className='label'>Graduación alcohólica</label>
                            <input className='input' type= 'float' value={input.alcohol}name='alcohol' onChange={(e) => handleChange(e)}/>
                            {err.alcohol && <span className='err'> {err.alcohol}</span>}

                        </div>
    
                        <div>
                            <label className='label'>Bodega</label>
                            <input className='input' type= 'text' value={input.winery}name='winery' onChange={(e) => handleChange(e)} ></input>
                            {err.winery && <span className='err'> {err.winery}</span>}
                        </div>
    
                        <div>
                            <label className='label'>Precio</label>
                            <input className='input' type= 'float' value={input.price}name='price' onChange={(e) => handleChange(e)} ></input>
                            {err.price && <span className='err'> {err.price}</span>}
                        </div>
    
                        <div>
                            <label className='label'>Volumen</label>
                            <input className='input' type= 'number' value={input.volume}name='volume' onChange={(e) => handleChange(e)}></input>
                            {err.volume && <span className='err'> {err.volume}</span>}
                        </div>

                        <div>
                            <label className='label'>Año de elaboración</label>
                            <input className='input' type= 'number' value={input.year}name='year' onChange={(e) => handleChange(e)}></input>
                            {err.year && <span className='err'> {err.year}</span>}
                        </div>


                        <div>
                            <label className='label'>Provincia</label>
                            <input className='input' type= 'text' value={input.province}name='province' onChange={(e) => handleChange(e)}></input>
                            {err.province && <span className='err'> {err.province}</span>}
                        </div>

                        <div>
                            <label className='label'>Región de origen</label>
                            <input className='input' type= 'text' value={input.region}name='region' onChange={(e) => handleChange(e)}></input>
                            {err.region && <span className='err'> {err.region}</span>}
                        </div>

                        <div>
                            <label className='label'>Página de la bodega</label>
                            <input className='input' type= 'text' value={input.url}name='url' onChange={(e) => handleChange(e)} ></input>
                            {err.url && <span className='err'> {err.url}</span>}
                        </div>

                        <div>
                            <label className='label'>Descripción</label>
                            <input className='input' type= 'text' value={input.description}name='description' onChange={(e) => handleChange(e)}></input>
                            {err.description && <span className='err'> {err.description}</span>}
                        </div>

                        {/* <div>
                            <label className='label'>Imagen del producto</label>
                            <input type= 'text' value={input.image}name='image' onChange={(e) => handleChange(e)}></input>
                            {err.image && <span className='err'> {err.image}</span>}
                        </div> */}
                        <div>
                        <label className='label'>Imagen</label>
                    <input className='input'
                    // placeholder='Image'
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


        // const [ images, setImages] = useState([])
    // const [ imageToRemove, setImageToRemove ] = useState(null)

    // function handleRemoveImg(imgObj){
  
    // }

    // function handleOpenWidget(){
    //     var myWidget = window.cloudinary.createUploadWidget(
    //         {
    //         cloudName: 'dsyss1x3l', 
    //         uploadPreset: 'dionisiowine'
    //         }, 
    //         (error, result) => { 
    //           if (!error && result && result.event === "success") { 
    //             setImages((prev) => [...prev, {url: result.info.url, public_id: result.info.public_id}])
    //             console.log(result.info)
    //           }
    //         }
    //       )
    //       myWidget.open()
    // }


              {/* <button id="upload_widget" class="cloudinary-button" onClick={() => handleOpenWidget()}>Upload files</button>
            <div>
                {images.map((image => (
                <div>
                    <img src={image.url}/>
                </div>
                )))}
            </div> */}

            //// Configure Cloudinary
//     cloudinary.config({
//     cloud_name: "dsyss1x3l",
//     api_key: "897694589133187",
//     api_secret: "PIovoSS_5hRot-L3dx4xPItuOXE"
//   })
