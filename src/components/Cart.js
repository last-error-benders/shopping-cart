import React from 'react';
import { totalPrice } from '../lib/helpers';
import store from '../store';

class Cart extends React.Component {
  componentDidMount() {
    const unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const items = store.getState().cart.map((item) => {
      return (
        <tr key={item.id}>
          <td>{item.title}</td>
          <td>{item.quantity}</td>
          <td>${item.price}</td>
        </tr>
      );
    });

    if (items.length === 0) {
      return (
        <div className="cart">
          <h2>Your Cart</h2>
          <p>Your cart is empty</p>
          <p>Total: $0</p>
          <a
            className="button checkout disabled"
          >
            Checkout
          </a>
        </div>
      );
    } else {
      return (
        <div className="cart">
          <h2>Your Cart</h2>
          <table className="cart-items">
            <tbody>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
              
              { items }

              <tr>
                <td colSpan="3" className="total">Total: ${totalPrice(store.getState().cart)}</td>
              </tr>
            </tbody>
          </table>
          <a
            className="button checkout"
            onClick={this.props.onCheckoutClick}
          >
            Checkout
          </a>
        </div>
      );
    }
  }
}

export default Cart;
