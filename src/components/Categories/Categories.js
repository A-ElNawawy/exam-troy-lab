import Category from "./Category/Category";

import { data } from "./data/data";

import styles from "./Categories.module.css";

const CategoriesList = data.map((category) => (
  <Category key={category.id} img={category.img} name={category.name} />
));

const Categories = () => {
  return (
    <div className={styles.Categories}>
      <button className={styles.all}>الكل</button>
      {CategoriesList}
    </div>
  );
};

export default Categories;
