import Product from "./Product";

const Products = ({
  products,
  onEditProduct,
  onDeleteProduct,
  onAddToCart,
}) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      {products.map((product) => {
        return (
          <Product
            onAddToCart={onAddToCart}
            onEditProduct={onEditProduct}
            onDeleteProduct={onDeleteProduct}
            key={product._id}
            product={product}
          />
        );
      })}
    </div>
  );
};

export default Products;
