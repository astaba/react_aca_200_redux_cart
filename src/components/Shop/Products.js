import { useSelector } from "react-redux";

import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const products = useSelector((state) => state.productState);
  
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((item) => (
          <ProductItem
            key={item.id}
            item={item}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
