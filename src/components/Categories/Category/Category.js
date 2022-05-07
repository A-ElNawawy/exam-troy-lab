import styles from "./Category.module.css";

const Category = ({ img, name }) => {
  return (
    <button className={styles.Category}>
      <img src={img} alt={name} />
      <span>{name}</span>
    </button>
  );
};

export default Category;
