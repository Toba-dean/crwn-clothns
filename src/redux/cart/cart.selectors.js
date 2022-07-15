import { createSelector } from 'reselect'

// get the state from the root reducer
const selectCart = state => state.cart;

// select the cartItem from the cart state object
export const selectCartItems = createSelector(
  [selectCart], cart => (
    cart.cartItems
  )
);

// select hidden prop from the cart state object
export const selectHidden = createSelector(
  [selectCart], cart => cart.hidden
)

// from the cartItem, get the number of items in the cart by summing the accumulatedValue and the cartItem quantity.
export const selectCartItemsCount = createSelector(
  [selectCartItems], cartItems => (
    cartItems.reduce((accumulatedValue, cartItem) => accumulatedValue + cartItem.quantity, 0)
  )
)

// from the cartItem, get the sum total of the price in the cart by summing the accumulatedValue and the product of cartItem quantity and price.
export const selectCartTotal = createSelector(
  [selectCartItems], cartItems => (
    cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + ( cartItem.quantity * cartItem.price), 0)
  )
)