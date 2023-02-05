import React from "react";
import './details.css'
import { getWineDetail } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'


export const Details = () => {

    const dispatch = useDispatch();
    const wineDetail = useSelector((state) => state.wineDetail);
    const { id } = useParams()

    useEffect(() => {
        dispatch(getWineDetail(id))
    }, [dispatch, id])
    
    return (
        <div className={'details-container-'}>
            <div><Link to='/home'><button className="buttonBack" >Back to home</button></Link></div>
            <div className={'details-img-'}>
                <img src={wineDetail.image} alt={wineDetail.name} />
            </div>
            <div className={'details-info-'}>
                <h1><b>Vino {wineDetail.color_type}</b> {wineDetail.name}</h1>
                <h2><b>Variedad:</b> {wineDetail.varietal}</h2>
                <p><b>Tipo:</b> {wineDetail.color_type}</p>
                <p><b>Bodega:</b> {wineDetail.winery}</p>
                <p><b>Ubicacion / Origen:</b> {wineDetail.province}, {wineDetail.region}</p>
                <p><b>Sitio Web:</b> {wineDetail.url}</p>
                <p><b>Alcohol:</b> {wineDetail.alcohol}%</p>
                <p><b>Año:</b> {wineDetail.year}</p>
                <p><b>Precio:</b> ${wineDetail.price}</p>
                <p><b>Nota de cata:</b> {wineDetail.description}</p>
            </div>
        </div>
    );
}
