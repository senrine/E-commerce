import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    createCartItem: (state, action) => {
      state.cartItems.push(action.payload);
    },
    updateItemFromSelect: (state, action) => {
      state.cartItems.find(
        (cartItem) => cartItem.id === action.payload.id
      ).quantity = Number(action.payload.value);
    },
    removeFromCart: (state, action) => {
      const indexOfItem = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload
      );
      state.cartItems.splice(indexOfItem, 1);
    },
  },
});

export function addOneToCart(action) {
  return function (dispatch, getState) {
    const storeState = getState();

    const isAlreadyPresent = storeState.cart.cartItems.find(
      (cartItem) => cartItem.id === action
    );

    if (!isAlreadyPresent) {
      const itemToAdd = storeState.products.items.find(
        (item) => item.id === action
      );

      const newCartItem = {
        ...itemToAdd,
        quantity: 1,
      };
      dispatch(createCartItem(newCartItem));
    }
  };
}

export const { createCartItem, updateItemFromSelect, removeFromCart } =
  cart.actions;
export default cart.reducer;
