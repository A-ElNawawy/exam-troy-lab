import Category from "./Category/Category";
import SquareButton from "./../UIs/SquareButton/SquareButton";

import { data } from "./data/data";

import styles from "./Categories.module.css";

const CategoriesList = data.map((category) => (
  <Category key={category.id} img={category.img} name={category.name} />
));

const Categories = () => {
  return (
    <div className={styles.Categories}>
      <SquareButton bgColor='green'>الكل</SquareButton>
      {CategoriesList}
    </div>
  );
};

export default Categories;
