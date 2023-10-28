import { Product } from './Product';
import Section from './Section/Section';
import css from './App.module.css';

const productData = [
  {
    id: '3',
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
    id: '1',
    title: 'Tacos with lime XL',
    price: 6.99,
    discount: null,
  },
];

export const App = () => {
  return (
    <div className={css.product}>
      <Section>
        <h1>Hello WORLD🙂</h1>
      </Section>

      <Section title="Product List">
        <div className={css.productList}>
          {productData.map(product => {
            return (
              <Product
                key={product.id}
                title={product.title}
                price={product.price}
                discount={product.discount}
              />
            );
          })}
        </div>
      </Section>
    </div>
  );
};
