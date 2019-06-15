import { combineReducers } from 'redux';
import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
} from './actions'


const initState = {
  products: [],
}

function productsInCart(state = initState, action) {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      console.log(state.products)
      return {
        ...state,
        products: [...state.products, action.product],
      }
    case REMOVE_PRODUCT_FROM_CART: {
        let newState = [...state];
        const index = state.findIndex(pr => pr.id === action.productId);
        if (index) {
          newState.splice(index, 1);
          return newState;
        } else {
          return state;
        }
        // if (index) {
        //     if (newState[index].count <= action.count) {
        //         newState.splice(index, 1);
        //         return newState;
        //     } else {
        //         newState[index].count -= action.count;
        //         return newState; 
        //     }
        // } else {
        //     return state;
        // }
    }
    default:
      return state
  }
}

// const mainReducer = combineReducers({
//   productsInCart,
// })
const mainReducer = productsInCart

export default mainReducer