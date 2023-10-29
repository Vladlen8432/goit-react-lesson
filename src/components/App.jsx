import { Product } from './Product';
import Section from './Section/Section';
import css from './App.module.css';
import { Component } from 'react';
import ProductForm from './ProducrForm/ProductForm';
import { nanoid } from 'nanoid';

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
    products: productData,
  };

  handleDeleteProduct = productId => {
    this.setState({
      products: this.state.products.filter(product => product.id !== productId),
    });
  };

  handleAddProduct = productData => {
    console.log('productData: ', productData);

    const hasDuplicates = this.state.products.some(
      product => product.title === productData.title
    );

    if (hasDuplicates) {
      alert(`Ops, product with title '${productData.title}' already exist`);
      return;
    }

    const finalProduct = {
      ...productData,
      id: nanoid(),
    };

    this.setState(prevState => ({
      products: [...this.state.products, finalProduct],
    }));
  };

  render() {
    const sortedProduct = [...this.state.products].sort(
      (a, b) => b.discount - a.discount
    );

    return (
      <div className={css.product}>
        <Section>
          <h1>Hello WORLD🙂</h1>
        </Section>

        <Section title="Add product Form">
          <ProductForm handleAddProduct={this.handleAddProduct} />
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
