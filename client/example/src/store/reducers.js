import { combineReducers } from 'redux';
import {
  ADD_PRODUCT_TO_CART,
  DECREASE_PRODUCT_COUNT_IN_CART,
} from './actions'


function productsInCart(state = [], action) {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return [
        ...state,
        {
          id: action.productId,
          count: action.count,
        },
      ]
    case DECREASE_PRODUCT_COUNT_IN_CART: {
        let newState = [...state];
        const index = state.findIndex(pr => pr.id === action.productId);
        if (index) {
            if (newState[index].count <= action.count) {
                newState.splice(index, 1);
                return newState;
            } else {
                newState[index].count -= action.count;
                return newState; 
            }
        } else {
            return state;
        }
    }
    default:
      return state
  }
}

const mainReducer = combineReducers({
  productsInCart,
})

export default mainReducer