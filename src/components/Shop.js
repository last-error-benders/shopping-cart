import React, { Component } from 'react';
import ProductList from './ProductList';
import seed from '../lib/data';
import Cart from './Cart';

class Shop extends Component {
  state = {
    data: [],
    cart: [],
  };

  componentDidMount() {
    this.setState({
      data: seed,
    });
  }

  handleAddClick = (itemId) => {
    const findItem = (item) => {
      return item.id === itemId;
    }

    const currItem = this.state.data.find(findItem);

    if (this.state.cart.find(findItem)) {
      this.setState({
        cart: this.state.cart.map((item) => {
          if (item.id === itemId) {
            return Object.assign({}, item, {
              quantity: item.quantity + 1,
            });
          } else {
            return item;
          }
        }),
      });
    } else {
      this.setState({
        cart: this.state.cart.concat(Object.assign({}, currItem, {
          quantity: 1,
        })),
      });
    }
  };

  handleCheckout = () => {
    this.setState({
      cart: [],
    });
  };

  render() {
    return (
      <div id="app">
        <header>
          <h1>The Shop!</h1>
          <Cart
            items={this.state.cart}
            onCheckoutClick={this.handleCheckout}
          />
        </header>

        <main>
          <ProductList
            data={this.state.data}
            onAddClick={this.handleAddClick}
          />

          <div className="add-form visible">
            <p><a className="button add-product-button">Add A Product</a></p>
            <h3>Add Product</h3>
            <form>
              <div className="input-group">
                <label htmlFor="product-name">Product Name</label>
                <input type="text" id="product-name" value="" />
              </div>

              <div className="input-group">
                <label htmlFor="product-price">Price</label>
                <input type="text" id="product-price" value="" />
              </div>

              <div className="input-group">
                <label htmlFor="product-quantity">Quantity</label>
                <input type="text" id="product-quantity" value="" />
              </div>

              <div className="actions form-actions">
                <a className="button">Add</a>
                <a className="button">Cancel</a>
              </div>
            </form>
          </div>
        </main>
      </div>
    );
  }
}

export default Shop;
