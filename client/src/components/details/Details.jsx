import './details.css'
import React from 'react'
import { useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getDetails } from '../../redux/actions';


export const Details =() =>{
    const dispatch = useDispatch();
    const {id} = useParams();
         useEffect(() => {
           dispatch(getDetails(id))
        // return()=> {dispatch(getDetail(id))}
    },[id, dispatch]);

     const detail = useSelector((state) => state.detail)
    //  if (id){
    //      detail.id = "0290f910-4a4c-4d1d-a9f6-3158c66ec3f6"
    //  }

     return (
          <div className='fondo'>
                  <div className="container_detail">
                     <div>
                      <h1 className="winenamedetail">{detail.name}</h1>

                           <img className='image_detail' src={detail.image} alt='not found'/>
                         
                         <p>{detail.winery} </p>
                         
                         <p> {detail.varietal} </p>

                     </div> 

            </div>
          
          </div>
     )
      }