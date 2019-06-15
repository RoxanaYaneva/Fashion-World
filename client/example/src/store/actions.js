
// * action types *
export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART'
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART'

// * action creators *
export function addProductToCart(product) {
  return { type: ADD_PRODUCT_TO_CART, product }
}

export function removeProductFromCart(productId) {
  return { type: REMOVE_PRODUCT_FROM_CART, productId }
}
