import { createSlice } from '@reduxjs/toolkit';

// Estado inicial do carrinho
const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      state.totalQuantity++;
      state.totalPrice += newItem.price;

      if (!existingItem) {
        state.items.push({ ...newItem, quantity: 1 });
      } else {
        existingItem.quantity++;
      }
    },

    removeItemFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem) {
        state.totalQuantity--;
        state.totalPrice -= existingItem.price;

        if (existingItem.quantity === 1) {
          state.items = state.items.filter(item => item.id !== id);
        } else {
          existingItem.quantity--;
        }
      }
    },

    updateItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem) {
        const quantityDifference = quantity - existingItem.quantity;
        state.totalQuantity += quantityDifference;
        state.totalPrice += quantityDifference * existingItem.price;
        existingItem.quantity = quantity;

        if (existingItem.quantity <= 0) {
          state.items = state.items.filter(item => item.id !== id);
        }
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addItemToCart, removeItemFromCart, updateItemQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
