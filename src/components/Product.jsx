import css from './Product.module.css';

export const Product = ({ title, price, discount }) => {
  const productBg = discount ? '#87e605' : '#f9bf04';

  const productStyles = {
    backgroundColor: productBg,
  };

  return (
    <div className={css.product} style={productStyles}>
      <img
        src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        alt="TACOS WITH LIME"
        width="640"
        className={css.productImg}
      />

      <h2>{title}</h2>
      {discount ? (
        <h3 className={css.discountBage}>Discount: {discount}$</h3>
      ) : (
        <p className={css.apology}>
          Sorry, but discount on this type of product has expired!
        </p>
      )}
      <p>Price: {price}$</p>
      <button className={css.productAddToCardBtn} type="button">
        Add to card
      </button>
    </div>
  );
};
