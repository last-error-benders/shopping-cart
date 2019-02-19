import React from 'react';

class AddProductForm extends React.Component {
  state = {
    name: this.props.name || '',
    price: this.props.price || '',
    quantity: this.props.quantity || '',
  };

  handleFormSubmit = (evt) => {
    const newProduct = {
      title: this.state.name,
      price: Number(this.state.price),
      quantity: Number(this.state.quantity),
    };
    this.props.onFormSubmit(newProduct);
  };

  handleInputChange = (evt) => {
    let key = evt.target.id;
    key = key.split('-')[1];
    let value = evt.target.value;
    this.setState({
      [key]: value,
    });
  };

  render() {
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
              value={this.state.quantity || '0'}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="actions form-actions">
            <a className="button" onClick={this.handleFormSubmit}>Add</a>
            <a className="button">Cancel</a>
          </div>
        </form>
      </div>
    );
  }
}

export default AddProductForm;