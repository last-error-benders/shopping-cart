import {createStore} from 'redux';

const reducer = (state = {}, action) => {
  if (action.type === 'PRODUCTS_FETCHED') {
    return {products: action.products};
  }

}

const store = createStore(reducer);

export default store;
