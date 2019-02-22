import React from 'react';
import Product from './Product';
import seed from '../lib/data';
import store from '../store';

class ProductList extends React.Component {
  componentDidMount() {
    let unsubscribe = store.subscribe(() => this.forceUpdate());
    store.dispatch({type: 'PRODUCTS_FETCHED', products: seed});
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    const products = store.getState().products.map((product) => {
      return (
        <Product
          key={product.id}
          {...product}
          onAddClick={this.props.onAddClick}
          onUpdateSubmit={this.props.onUpdateSubmit}
          onDeleteClick={this.props.onDeleteClick}
        />
      );
    });

    return (
      <div className="product-listing">
        <h2>Products</h2>
        { products }
      </div>
    );
  }
}

export default ProductList;
