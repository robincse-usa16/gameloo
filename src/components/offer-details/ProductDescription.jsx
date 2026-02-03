const ProductDescription = ({ description }) => {
  return (
    <div className="product-desc">
      <h3>About this product</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProductDescription;
