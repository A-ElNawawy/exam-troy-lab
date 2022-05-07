import info from "./../assets/info.svg";
import kcalImg from "./../assets/kcal.svg";
import plus from "./../assets/plus.svg";

import styles from "./Product.module.css";

const Product = ({ kcal, img, name, qty, price }) => {
  return (
    <div className={styles.Product}>
      <div className={styles.top}>
        <img src={info} alt='info' />

        <div className={styles.label}>
          <img src={kcalImg} alt='kcal' />

          <span className={styles.kcal}>{kcal} Kcal</span>
        </div>
      </div>

      <img className={styles.img} src={img} alt={name} />

      <div className={styles.bottom}>
        <button className={styles.add}>
          <img src={plus} alt='plus' />
        </button>

        <div className={styles.details}>
          <p className={styles.name}>{name}</p>

          <div className={styles.qty}>
            <span>الكمية بالمخزون: </span>

            <span className={styles.qty_number}>{qty}</span>
          </div>

          <p className={styles.price}>
            <span className={styles.price_number}>{price} &nbsp;</span>

            <span className={styles.currency}>ريال</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
