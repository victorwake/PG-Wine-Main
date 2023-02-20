import './details.css'
import { getWineDetail, addToCart } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { NavBar } from '../navBar/NavBar'




export const Details = () => {

    const dispatch = useDispatch();
    const wineDetail = useSelector((state) => state.wineDetail);
    const clase = useSelector((state) => state.theme);
    const {id} = useParams();
    const [isAddingToCart, setIsAddingToCart] = useState(false);

    const cart = useSelector((state) => state.cart);
    const itemInCart = cart.some((item) => item.id === wineDetail.id);
    

    const wineColorType = wineDetail.color_type;
    let colorType = ""
    let colorName = ""
    
    const handleAddToCart = () => {
        setIsAddingToCart(true);
        dispatch(addToCart(wineDetail.id, wineDetail.name, wineDetail.varietal, wineDetail.price, wineDetail.image, wineDetail.quantity));

        setTimeout(() => {
        setIsAddingToCart(false);
        }, 10000);
    }
    
    let fauvorite = true
    const handleFav= (e)=>{
        (fauvorite === true) ? fauvorite = false : fauvorite= true 
        console.log(fauvorite)
    }

    
if(!!wineColorType){
    colorType = wineColorType.toLowerCase()
    colorName = wineColorType.toUpperCase()}

    useEffect(() => {
        dispatch(getWineDetail(id))
    }, [dispatch, id])

    return (
        <div className={"detail-container-" + clase}>
            <NavBar/>
        <div className='containerData'>
            <div>
                <Link to={`/vinos/${wineColorType}`}> <button id={"agregar-" + clase} className="buttonBack" ><i class="bi bi-arrow-return-left"></i>  Volver </button></Link>          
            </div>
            <div className='img'>
                <img className='imagen' src={wineDetail.image} alt={wineDetail.name} />
            </div>
                <div className={"name-" + colorType}>
                    <h2>{colorName}S - {wineDetail.name}</h2>
                </div>
            <div className='tabla'>
                <table class="table">
                    <tbody>
                        <tr>
                        <th className={"th-"+ colorType}>Variedad</th>
                        <td id={"td-" + clase}>{wineDetail.varietal}</td>
                        </tr>
                        <tr>
                        <th className={'th-'+ colorType}>Bodega</th>
                        <td id={"td-" + clase}>{wineDetail.winery}</td>
                        </tr>
                        <tr>
                        <th className={'th-'+ colorType}>Ubicacion</th>
                        <td id={"td-" + clase}>{wineDetail.province}</td>
                        </tr>
                        <tr>
                        <th className={'th-'+ colorType}>Alcohol</th>
                        <td id={"td-" + clase}>{wineDetail.alcohol} %</td>
                        </tr>
                        <tr>
                        <th className={'th-'+ colorType}>Año</th>
                        <td id={"td-" + clase}>{wineDetail.year}</td>
                        </tr>
                        <tr>
                        <th className={'th-'+ colorType}>Nota de cata</th>
                        <td id={"td-" + clase}>{wineDetail.description}</td>
                        </tr>
                    </tbody>
                </table> 
            </div>
                <h3 className='price'>$ {wineDetail.price}</h3>
                <button id={"agregar-" + clase} className='addToCart'  onClick={handleAddToCart} disabled={isAddingToCart || itemInCart}><i id={"agregar-" + clase} class="bi bi-cart3"> {itemInCart ? 'Item en Carrito' : 'Agregar al Carrito'}
</i></button>
                <button className='heart' onClick={(e)=>handleFav(e)}>{!fauvorite ? <i class="bi bi-heart"></i> : <i class="bi bi-heart-fill"></i>}</button>
        </div>
        </div>
    );

}