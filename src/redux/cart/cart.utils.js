// A function to group multiple cart item of the same id making the quantity increase.

export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingItems = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

  if(existingItems) {
    return cartItems.map(cartItem => 
      cartItem.id === cartItemToAdd.id ? 
      { ...cartItem, quantity: cartItem.quantity + 1 } :
      cartItem
    )
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}


export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingItems = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

  if(existingItems.quantity === 1) {
    return cartItems.filter(
      cartItem => cartItem.id !== cartItemToRemove.id
    )
  }

  return cartItems.map(cartItem => 
    cartItem.id === cartItemToRemove.id ? 
    { ...cartItem, quantity: cartItem.quantity - 1 } :
    cartItem
  )
}