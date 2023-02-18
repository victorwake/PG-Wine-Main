import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
      products: {}
    },
    reducers: {
      addToCart: (state, action) => {
        const { productId, quantity, price } = action.payload;
        const existingProduct = state.products[productId];
        if (existingProduct) {
          state.products[productId] = {
            ...existingProduct,
            quantity: existingProduct.quantity + quantity
          };
        } else {
          state.products[productId] = {
            quantity,
            price
          };
        }
      },
      removeFromCart: (state, action) => {
        const { productId } = action.payload;
        delete state.products[productId];
      },
      cleanCart: (state) => {
        state.products = {};
      }
    }
  });
  
  export const { addToCart, removeFromCart, cleanCart } = cartSlice.actions;
  
  export default cartSlice.reducer;
  