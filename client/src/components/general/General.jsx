import './general.css';
import { SearchBar } from '../searchBar/SearchBar';
import { NavBar } from '../navBar/NavBar';
import {useDispatch, useSelector} from 'react-redux';
import { useState } from 'react';





export const General = () => {

    const dispatch = useDispatch();
    // const allVarietal = useSelector(state => state.varietal)

    // function handleClick(e){
    //     e.preventDefault();
    //     // dispatch(cleanAllFilters());
    //     }
    const [ images, setImages] = useState([])
    const [ imageToRemove, setImageToRemove] = useState(null)
    
    function handleRemove(){

    }
    function handleOpenWidget(){
        var myWidget = window.cloudinary.createUploadWidget(
            {
            cloudName: 'dsyss1x3l', 
            uploadPreset: 'dionisiowine'
            }, 
            (error, result) => { 
              if (!error && result && result.event === "success") { 
                console.log('Done! Here is the image info: ', result.info); 
              }
            }
          )
          myWidget.open()
    }
   

    return (
        <div className='general'>
            <div className='general_nav'>
                <NavBar/>
            </div>
            <div className='general_data'>
                <h1>aca van las card</h1>
            </div>
            <div>
        <button onClick={() => handleOpenWidget()}>Upload Picture</button>
        </div>
        </div>

    )
}