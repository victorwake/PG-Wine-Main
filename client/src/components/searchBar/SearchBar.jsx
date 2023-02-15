import './searchBar.css';
import {creataAutocomplete, createAutocomplete} from '@algolia/autocomplete-core'
import { useState, useMemo, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getWinesByName } from '../../redux/actions';


const AutocompleteItem = ({id, name, image, price}) => {
    return (
    <li>
        <Link to={`/details/${id}`}>
            <a className="hover:bg-blue-300 flex gap-4 p-4">
                {/* <img src={image} alt={name} className='w-12 h-12 object-contain'/> */}
                <div>
                    <h3 className='text-sm font-semibold'>{name}</h3>
                    <p className='text-xs text-gray-600'>${price}</p>
                </div>
            </a>
        </Link>
    </li>
    )
}

export const SearchBar = (props) =>  {
    const [autocompleteState, setAutocompleteState] = useState({
        collections:[],
        isOpen: false
    })

    const wines = useSelector(state => state.wines)

    const autocomplete = useMemo (()=>createAutocomplete({
        placeholder:'Buscar',
        onStateChange:({state})=> setAutocompleteState(state),
        getSources:()=>[{
            sourceId: 'wines-next-api',
            getItems:({query})=>{
                if(!!query){
                   return wines
                }
            }
        }], 
        ...props
    }), [props])

    const formRef = useRef(null)
    const inputRef = useRef(null)
    const panelRef = useRef(null)

    const formProps = autocomplete.getFormProps({
        inputElement:inputRef.current
    })
    const inputProps = autocomplete.getInputProps({
        inputElement:inputRef.current
    })

    return (
        <form ref={formRef} className='flex justify-center mb-20' {...formProps}>
            <div className='flex relative p-1'>
                <input ref={inputRef} className='flex-1 p-2 pl-4 rounded-full w-full' type="text" placeholder='Buscar' {...inputProps}/>
            {
                autocompleteState.isOpen && (
                    <div className='absolute top-0 left-0 border border-gray-100 bg-white rounded-lg shadow-lg z-10' ref={panelRef} {...autocomplete.getPanelProps()}>
                        {autocompleteState.collections.map((collection,index) => {
                            const {items} = collection
                            console.log(items)
                            return(
                                <section key={`section-${index}`}> 
                                    {items.length > 0 && (
                                        <ul {...autocomplete.getListProps()}>
                                            {
                                                items.map(item=><AutocompleteItem key={item.id} {...item}/>)
                                            }
                                        </ul>
                                    )}
                                </section>
                            )
                       
                       })}
                    </div>
                )
            }  
            </div>
        </form>
    )

  
};