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
    export function shoppingReducer(state, action) {
        switch (action.type) {
          case TYPES.ADD_TO_CART: {
            let newItem = state.products.find(
              (product) => product.id === action.payload
            );
            //console.log(newItem);
      
            let itemInCart = state.cart.find((item) => item.id === newItem.id);
      
            return itemInCart
              ? {
                  ...state,
                  cart: state.cart.map((item) =>
                    item.id === newItem.id
                      ? { ...item, quantity: item.quantity + 1 }
                      : item
                  ),
                }
              : {
                  ...state,
                  cart: [...state.cart, { ...newItem, quantity: 1 }],
                };
          }
          case TYPES.REMOVE_ONE_FROM_CART: {
            let itemToDelete = state.cart.find((item) => item.id === action.payload);
      
            return itemToDelete.quantity > 1
              ? {
                  ...state,
                  cart: state.cart.map((item) =>
                    item.id === action.payload
                      ? { ...item, quantity: item.quantity - 1 }
                      : item
                  ),
                }
              : {
                  ...state,
                  cart: state.cart.filter((item) => item.id !== action.payload),
                };
          }
          case TYPES.REMOVE_ALL_FROM_CART: {
            return {
              ...state,
              cart: state.cart.filter((item) => item.id !== action.payload),
            };
          }
          case TYPES.CLEAR_CART:
            return shoppingInitialState;
          default:
            return state;
        }
      }