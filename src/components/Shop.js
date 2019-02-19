import React, { Component } from 'react';
import ProductList from './ProductList';
import seed from '../lib/data';
import Cart from './Cart';
import AddProductForm from './AddProductForm';
import {autoIncrementer} from '../lib/helpers';

const idGenerator = autoIncrementer();

class Shop extends Component {
  state = {
    data: [],
    cart: [],
    form: {
      'name': '',
      'price': '',
      'quantity': '',
    }
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

    this.setState({
      data: this.state.data.map((item) => {
        if (item.id === currItem.id) {
          let newItem = Object.assign({}, item);
          newItem.quantity -= 1;
          return newItem;
        } else {
          return item;
        }
      }),
    });
  };

  handleCheckout = () => {
    this.setState({
      cart: [],
    });
  };

  handleFormSubmit = (newProduct) => {
    newProduct.id = idGenerator();
    this.setState({
      data: this.state.data.concat(newProduct)
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

          <AddProductForm 
            product={this.state.form}
            onFormSubmit={this.handleFormSubmit}
          />
        </main>
      </div>
    );
  }
}

export default Shop;
