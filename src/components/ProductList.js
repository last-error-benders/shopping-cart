import React from 'react';
import Product from './Product';

class ProductList extends React.Component {
  render() {
    const products = this.props.data.map((product) => {
      return (
        <Product
          key={product.id}
          {...product}
          onAddClick={this.props.onAddClick}
          onUpdateSubmit={this.props.onUpdateSubmit}
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
