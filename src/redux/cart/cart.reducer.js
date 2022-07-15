import { cartActionTypes } from "./cart.types"

import { addItemToCart, removeItemFromCart } from "./cart.utils"

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
}

export const cartReducer = (state = INITIAL_STATE, action) => {
  const { TOGGLE_CART_HIDDEN, ADD_CART_ITEM, REMOVE_CART_ITEM, CLEAR_CART_ITEM } = cartActionTypes
  switch(action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }
    case ADD_CART_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      }
    case REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      }
    case CLEAR_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        )
      }
    default:
      return state;
  }
} 