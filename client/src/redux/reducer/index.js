import {} from '../actions/index.js';
const initialState = {
    wines : [],
    varietal : [],
    winery : [],
    allWines : [],
    currentPage : 1,
    winedetails: [],
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        

            case 'GET_WINES':
            return {
                ...state, //guardo el estado
                wine: action.payload, //
                allWines: action.payload 
            }
    
            case 'GET_WINE_NAME':
                return {
                    ...state,
                    wine: action.payload //es el arreglo q estoy renderizando
                }
    
            case 'GET_VARIETAL':
            return {
                ...state,
                varietal: action.payload
            }
            case 'GET_WINERY':
                return {
                    ...state,
                    winery: action.payload
                }
    
            case 'POST_WINE':
                return {
                    ...state,
                }
    
    
            case 'FILTER_BY_VARIETAL':
                const allVarietales = state.allWines //aca tb para el filtro desde todos
                const wineFiltered = action.payload === 'All'? 
                state.allWines : allVarietales.filter(el => {
                   return el.varietal? el.varietal.includes(action.payload) :
                        el.varietal?.map(ele => ele.name).includes(action.payload) 
                        
                })
                    return {
                        ...state, //me traigo todo lo de estado
                        wines: wineFiltered
                        
            }
    
            // case 'FILTER_CREATED':
            //     const filterCreated = action.payload === 'Created' ? 
            //     state.allWine.filter(el => el.createdInDb) 
            //     : state.allWine.filter( el => !el.createdInDb)
            //     return {
            //         ...state, //me devuelve el estado anterior
            //         wines: action.payload === 'All'? state.allWines 
            //         : filterCreated  
    
            // }
    
                   case 'CLEAN_FILTERS':
            return {
                ...state,
                wines: state.allWines,
                currentPage: 1
            }
            case 'ORDER_BY_NAME': //'Asc. Desc'
                let sortName = action.payload ==='Asc'?
                state.allWines.sort(function(a, b) {
                    if (a.name.toLowerCase() > b.name.toLowerCase()) {
                        return 1;
                    }
                    if (b.name.toLowerCase() > a.name.toLowerCase()) {
                        return -1;
                    }
                    return 0; // si son iguales lo deja como están quiere decir
                }) 
                :state.allWines.sort(function(a, b) { // si no, ordenalo 'Desc'
                    if (a.name.toLowerCase() > b.name.toLowerCase()) {
                        return -1;
                    }
                    if (b.name.toLowerCase() > a.name.toLowerCase()) {
                        return 1;
                    }
                    return 0;
                })
                return {
                    ...state,
                    wines: sortName,
                };
    
    
            case 'ORDER_BY_PRICE':
                let sortTipo = action.payload === 'Precio' ?
                state.wines.sort(function(a, b) {
                    if (a.tipo > b.tipo) {
                        return 1;
                    }
                    if(b.tipo > a.tipo) {
                        return -1;
                    }
                    return 0;
                })
                :state.wines.sort(function(a, b) {
                    if (a.tipo > b.tipo) {
                        return -1;
                    }
                    if ( b.tipo > a.tipo) {
                        return 1;
                    }
                    return 0;        
                });
                return  {
                    ...state,
                    wines: sortTipo,
                
    
            };
            case 'GET_WINE_DETAIL':
                return {
                    ...state,
                    wineDetail: action.payload
                };
        
    
    }
 }

export default rootReducer;


