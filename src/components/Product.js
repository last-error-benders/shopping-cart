import React from 'react';
import AddProductForm from './AddProductForm';

class Product extends React.Component {
  state = {
    editing: false,
  };

  handleAddClick = () => {
    this.props.onAddClick(this.props.id);
  }

  handleToggleEdit = () => {
    this.setState({
      editing: !this.state.editing,
    });
  }

  handleDeleteClick = () => {
    this.props.onDeleteClick(this.props.id);
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
      <a className="button edit" onClick={this.handleToggleEdit}>Edit</a>
    );

    if (this.state.editing) {
      addButton = undefined;
      editFormOrAddButton = (
        <AddProductForm
          name={this.props.title}
          price={this.props.price}
          quantity={this.props.quantity}
          productId={this.props.id}
          editing={true}
          onUpdateSubmit={this.props.onUpdateSubmit}
          onToggleEdit={this.handleToggleEdit}
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
          <a 
            className="delete-button"
            onClick={this.handleDeleteClick}
          ><span>X</span></a>
        </div>
      </div>
    );
  }
}

export default Product;
