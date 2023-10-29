import { Product } from './Product';
import Section from './Section/Section';
import css from './App.module.css';
import { Component } from 'react';

const productData = [
  {
    id: '1',
    title: 'Tacos with lime M',
    price: 5.85,
    discount: 15,
  },

  {
    id: '2',
    title: 'Tacos with lime XXL',
    price: 10.99,
    discount: 15,
  },

  {
    id: '3',
    title: 'Tacos with lime XL',
    price: 6.99,
    discount: null,
  },
];

export class App extends Component {
  state = {
    counterValue: 0,
    products: productData,
    showMessage: false,
    currentPage: 1,
  };

  handleIncrement = () => {
    // this.state.counterValue = this.state.counterValue + 1;❌
    this.setState({ counterValue: this.state.counterValue + 1 });
  };

  handleDecrement = () => {
    if (this.state.counterValue === 0) {
      alert('Counter value is already decremented!');
      return;
    }

    this.setState({ counterValue: this.state.counterValue - 1 });
  };

  handleDeleteProduct = productId => {
    this.setState({
      products: this.state.products.filter(product => product.id !== productId),
    });
  };

  render() {
    const sortedProduct = [...this.state.products].sort(
      (a, b) => b.discount - a.discount
    );

    return (
      <div className={css.product}>
        <Section>
          <h1>Hello WORLD🙂</h1>
          <button onClick={this.handleDecrement}>Decrement</button>
          <b>Counter value: {this.state.counterValue}</b>
          <button onClick={this.handleIncrement}>Increment</button>

          {this.state.counterValue > 5 && (
            <div>
              Congratulation! You won the discount promocode 20% OFF -
              #ROLD94B🍕
            </div>
          )}
        </Section>

        <Section title="Product List">
          <div className={css.productList}>
            {sortedProduct.map(product => {
              return (
                <Product
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  discount={product.discount}
                  handleDeleteProduct={this.handleDeleteProduct}
                />
              );
            })}
          </div>
        </Section>
      </div>
    );
  }
}
