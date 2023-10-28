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
    <section>
      <h1>Hello WORLD🙂</h1>

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

      {/* <Product title="Tacos with lime" price="10.99" discount={null} />
      <Product title="Tacos L" price="7.66" discount={1.5} />
      <Product title="Tacos S" price="4.55" discount={2.33} /> */}
    </section>
  );
};

const Product = ({ title, price, discount }) => {
  return (
    <div>
      <img
        src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        alt="TACOS WITH LIME"
        width="640"
      />

      <h2>{title}</h2>
      {discount ? (
        <h3>Discount: {discount}$</h3>
      ) : (
        <p>Sorry, but discount on this type of product has expired!</p>
      )}
      <p>Price: {price}$</p>
      <button type="button">Add to card</button>
    </div>
  );
};
