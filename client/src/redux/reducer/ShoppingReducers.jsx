import { useReducer } from "react";
import ShoppingCart from "../../components/shoppingCart/ShoppingCart";
import { TYPES } from "../actions/ShoppingActions";

    export const shoppingInitialState ={
        productos:[
           
            {   name: '',
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
            stock: 1
            }  
        ],
        cart:[],

    }
    export function shoppingReducer(state,action){
          
       const {productos, cart}=state;
       switch(action.type){
            case TYPES.ADD_TO_CART:{

            }
            case TYPES.REMOVE_ONE_FROM_CART:{
                
            }
            case TYPES.REMOVE_ALL_FROM_CART:{
                
            }
            case TYPES.CLEAR_CART:{
                
            }
            default:
                return state;
        }
    }
export default ShoppingCart;