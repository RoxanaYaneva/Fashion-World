import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  LOGIN,
} from './actions'


const initState = {
  products: [],
  userId: '',
}

function mainReducer(state = initState, action) {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return {
        ...state,
        products: [...state.products, action.product],
      }
    case REMOVE_PRODUCT_FROM_CART: {
        let newStateProducts = state.products;
        const index = state.products.findIndex(pr => pr.product_id === action.id);
        if (index >= 0) {
          newStateProducts.splice(index, 1);
          return {
            ...state,
            products: newStateProducts,
          }
        } else {
          return state;
        }
    }
    case LOGIN: {
      let newUserId = action.userId;
      return {
        ...state,
        userId: newUserId,
        
      }
    }
    default:
      return state
  }
}

// const mainReducer = combineReducers({
//   productsInCart,
// })

export default mainReducer