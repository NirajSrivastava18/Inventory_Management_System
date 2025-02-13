import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: JSON.parse(localStorage.getItem('cart')) || [],
  reducers: {
    addToCart: (state, action) => {
      const item = state.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem('cart', JSON.stringify(state));
    },
    removeFromCart: (state, action) => {
      const updatedCart = state.filter((item) => item.id !== action.payload);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      state.forEach((item) => {
        if (item.id === id) {
          item.quantity = quantity;
        }
      });
      localStorage.setItem('cart', JSON.stringify(state));
    },
    clearCart: (state) => {
      localStorage.removeItem('cart');
      return [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
