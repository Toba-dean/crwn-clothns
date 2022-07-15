import { cartActionTypes } from "./cart.types";

const { TOGGLE_CART_HIDDEN, ADD_CART_ITEM, REMOVE_CART_ITEM, CLEAR_CART_ITEM } = cartActionTypes

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: ADD_CART_ITEM,
  payload: item
}) 

export const removeItem = item => ({
  type: REMOVE_CART_ITEM,
  payload: item
})

export const clearItem = item => ({
  type: CLEAR_CART_ITEM,
  payload: item
}) 