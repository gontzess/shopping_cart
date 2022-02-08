import Product from "./Product";

const Products = ({ products, onEditProduct, onDeleteProduct }) => {
  return (
    <div class="product-listing">
      <h2>Products</h2>
      {products.map((product) => {
        return (
          <Product
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
