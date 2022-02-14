import { useContext, useEffect } from "react";
import { getProducts, ProductContext } from "../context/product-context";
import Product from "./Product";

const Products = ({ onAddToCart }) => {
  const { products, dispatch } = useContext(ProductContext);

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  return (
    <div className="product-listing">
      <h2>Products</h2>
      {products.map((product) => {
        return (
          <Product
            onAddToCart={onAddToCart}
            key={product._id}
            product={product}
          />
        );
      })}
    </div>
  );
};

export default Products;
