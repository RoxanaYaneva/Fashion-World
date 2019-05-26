
// * action types *
export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART'
export const DECREASE_PRODUCT_COUNT_IN_CART = 'DECREASE_PRODUCT_COUNT_IN_CART'

// * action creators *
export function addProductToCart(product) {
  return { type: ADD_PRODUCT_TO_CART, product }
}

export function decreaseProductCountInCart(productId, count) {
  return { type: DECREASE_PRODUCT_COUNT_IN_CART, productId, count }
}
