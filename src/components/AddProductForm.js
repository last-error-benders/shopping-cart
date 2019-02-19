import React from 'react';

class AddProductForm extends React.Component {
  state = {
    name: this.props.name || '',
    price: this.props.price || '',
    quantity: this.props.quantity || '',
    editing: this.props.editing || false,
  };

  handleFormSubmit = (evt) => {
    const newProduct = {
      title: this.state.name,
      price: Number(this.state.price),
      quantity: Number(this.state.quantity),
    };
    this.props.onFormSubmit(newProduct);
  };

  handleUpdateSubmit = (evt) => {
    this.props.onToggleEdit();
    const product = {
      id: this.props.productId,
      title: this.state.name,
      price: Number(this.state.price),
      quantity: Number(this.state.quantity),
    };
    this.props.onUpdateSubmit(product);
  };

  handleInputChange = (evt) => {
    let key = evt.target.id;
    key = key.split('-')[1];
    let value = evt.target.value;
    this.setState({
      [key]: value,
    });
  };

  handleCancelClick = () => {
    this.setState({
      name: '',
      price: '',
      quantity: '',
    });
  };

  render() {
    let addOrUpdateButtons;
    if (this.state.editing) {
      addOrUpdateButtons = (
        <React.Fragment>
          <a className="button" onClick={this.handleUpdateSubmit}>Update</a>
          <a className="button" onClick={this.props.onToggleEdit}>Cancel</a>
        </React.Fragment>
      );
    } else {
      addOrUpdateButtons = (
        <React.Fragment>
          <a className="button" onClick={this.handleFormSubmit}>Add</a>
          <a className="button" onClick={this.handleCancelClick}>Cancel</a>
        </React.Fragment>
      );
    }

    return (
      <div className="add-form visible">
        <p><a className="button add-product-button">Add A Product</a></p>
        <h3>Add Product</h3>
        <form>
          <div className="input-group">
            <label htmlFor="product-name">Product Name</label>
            <input 
              type="text" 
              id="product-name" 
              value={this.state.name} 
              onChange={this.handleInputChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="product-price">Price</label>
            <input 
              type="text" 
              id="product-price" 
              value={this.state.price} 
              onChange={this.handleInputChange}
              />
          </div>

          <div className="input-group">
            <label htmlFor="product-quantity">Quantity</label>
            <input 
              type="text" 
              id="product-quantity" 
              value={this.state.quantity}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="actions form-actions">
            {addOrUpdateButtons}
          </div>
        </form>
      </div>
    );
  }
}

export default AddProductForm;