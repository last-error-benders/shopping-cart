import React from 'react';
import AddProductForm from './AddProductForm';

class Product extends React.Component {
  state = {
    editing: false,
  };

  handleAddClick = () => {
    this.props.onAddClick(this.props.id);
  }

  toggleEdit = () => {
    this.setState({
      editing: !this.state.editing,
    });
  }

  render() {
    let addButton = (
      <a
        className="button add-to-cart"
        onClick={this.handleAddClick}
      >Add to Cart</a>
    );

    if (this.props.quantity <= 0) {
      addButton = (
        <a
          className="button add-to-cart"
          style={{backgroundColor: 'rgb(139, 151, 156)'}}
        >Add to Cart</a>
      );
    };

    let editFormOrAddButton = (
      <a className="button edit" onClick={this.toggleEdit}>Edit</a>
    );
    
    if (this.state.editing) {
      editFormOrAddButton = (
        <AddProductForm
          name={this.props.title}
          price={this.props.price}
          quantity={this.props.quantity}
        />
        // cancel button
      );
    }

    return (
      <div className="product">
        <div className="product-details">
          <h3>{this.props.title}</h3>
          <p className="price">${this.props.price}</p>
          <p className="quantity">{this.props.quantity} left in stock</p>

          <div className="actions product-actions">
            {addButton}
            {editFormOrAddButton}
          </div>
          <a className="delete-button"><span>X</span></a>
        </div>
      </div>
    );
  }
}

export default Product;
