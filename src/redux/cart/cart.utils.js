// add item to the cart array
export const addItemToCart = (cartItems, cartItemToAdd) => {
  // first check if item already exists in the array
  const existingItems = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

  // if it does, return the cart item i.e don't duplicate the entry and increasing the quantity by 1
  if(existingItems) {
    return cartItems.map(cartItem => 
      cartItem.id === cartItemToAdd.id ? 
      { ...cartItem, quantity: cartItem.quantity + 1 } :
      cartItem
    )
  }

  // else spread the items in the array then add the new cart item as an obj in the array with a quantity of 1
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

// remove item from cart array
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingItems = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

  // if the item exists and the quantity is 1, remove the item that the id === removed item id and return the array in which has item id !== removed id.
  if(existingItems.quantity === 1) {
    return cartItems.filter(
      cartItem => cartItem.id !== cartItemToRemove.id
    )
  }

  // else just reduce the quantity by 1
  return cartItems.map(cartItem => 
    cartItem.id === cartItemToRemove.id ? 
    { ...cartItem, quantity: cartItem.quantity - 1 } :
    cartItem
  )
}