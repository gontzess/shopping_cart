import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsReceived } from "../actions/productsActions";
import Product from "./Product";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products);

  useEffect(() => {
    const getProducts = async () => {
      dispatch(productsReceived());
    };
    getProducts();
  }, [dispatch]);

  return (
    <div className="product-listing">
      <h2>Products</h2>
      {products.map((product) => {
        return <Product key={product._id} product={product} />;
      })}
    </div>
  );
};

export default Products;
