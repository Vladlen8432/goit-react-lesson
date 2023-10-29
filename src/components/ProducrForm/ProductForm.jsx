import React, { Component } from 'react';
import css from './ProductForm.module.css';

export default class ProductForm extends Component {
  state = {
    title: '',
    price: '',
    hasDiscount: false,
    discount: '',
  };

  handleSubmit = event => {
    event.preventDefault();

    const hasDiscount = this.state.hasDiscount;

    const productData = {
      title: this.state.title,
      price: Number.parseFloat(this.state.price),
      discount: hasDiscount ? Number.parseFloat(this.state.hasDiscount) : null,
    };

    this.props.handleAddProduct(productData);
    console.log('From successfuly submited', productData);
  };

  handleInputChange = event => {
    const value =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value;

    const name = event.target.name;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={css.form}>
        {this.state.title === 'Spagetti' && (
          <h2>Congrats! You won a promocode - #IJ732RS🥳</h2>
        )}
        <label className={css.formLabel}>
          <p className={css.labelText}>Title: </p>
          <input
            type="text"
            name="title"
            onChange={this.handleInputChange}
            value={this.state.title}
          />
        </label>

        <label className={css.formLabel}>
          <p className={css.labelText}>Price: </p>
          <input
            type="text"
            name="price"
            onChange={this.handleInputChange}
            value={this.state.price}
          />
        </label>
        <br />

        <label className={css.formLabel}>
          <input
            type="checkbox"
            name="hasDiscount"
            onChange={this.handleInputChange}
            checked={this.state.hasDiscount}
          />
          <span>Has discount?</span>
        </label>
        <br />

        {this.state.hasDiscount && (
          <label className={css.formLabel}>
            <p className={css.labelText}>Discount: </p>
            <input
              type="text"
              name="discount"
              onChange={this.handleInputChange}
              value={this.state.discount}
            />
          </label>
        )}

        <button type="submit">Add Product</button>
      </form>
    );
  }
}
