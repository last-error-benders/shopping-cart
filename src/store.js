import {createStore} from 'redux';

const reducer = (state = {}, action) => {
  return {products: productsReducer(state.products, action)};
}

const productsReducer = (state = [], action) => {
  if (action.type === 'PRODUCTS_FETCHED') {
    return action.products;
  } else if (action.type === 'PRODUCT_DELETED') {
    return state.filter((product) => {
      return product.id !== +action.id;
    });
  // {type: "PRODUCT_DELETED", id: this.props.id}
  } else if (action.type === 'PRODUCT_EDITED') {
    return state.map((product) => {
      if (product.id === action.product.id) {
        return {...action.product};
      } else {
        return product;
      }
    })
  } else {
    return state;
  }
}

// const product = {
//   id: this.props.productId,
//   title: this.state.name,
//   price: Number(this.state.price),
//   quantity: Number(this.state.quantity),
// };

const store = createStore(reducer);

export default store;
