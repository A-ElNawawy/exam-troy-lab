import Product from "./Product/Product";

import { data } from "./data/data";

import styles from "./Products.module.css";

const ProductsList = data.map((product) => (
  <Product
    key={product.id}
    kcal={product.kcal}
    img={product.img}
    name={product.name}
    qty={product.qty}
    price={product.price}
  />
));

const Products = () => {
  return <div className={styles.Products}>{ProductsList}</div>;
};

export default Products;
