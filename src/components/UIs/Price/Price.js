import multiply from "./assets/multiply.svg";

import styles from "./Price.module.css";

const Price = ({ price, qty, color }) => {
  return (
    <p className={`${styles.price} ${color ? styles[color] : null}`}>
      <span className={styles.price_number}>{price} &nbsp;</span>

      <span className={styles.currency}>ريال</span>
      {qty ? (
        <span className={styles.quantity}>
          <img className={styles.multiply} src={multiply} alt='' />
          <span>{qty} </span>
        </span>
      ) : null}
    </p>
  );
};

export default Price;
