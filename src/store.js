import {createStore} from 'redux';

const reducer = (state = {}, action) => {
  return {products: productsReducer(state.products, action)};
}

const productsReducer = (state = [], action) => {
  if (action.type === 'PRODUCTS_FETCHED') {
    return action.products;
  } else {
    return state;
  }
}

const store = createStore(reducer);

export default store;
