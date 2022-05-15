import Item from "./Item/Item";

import styles from "./Result.module.css";

const Result = () => {
  return (
    <div className={styles.Result}>
      <div className={styles.card}>
        <div className={styles.user_details}>
          <img src='' alt='' />
          <div className={styles.details}>
            <div className={styles.user_number}>
              الرقم المقصفي <span>135</span>
            </div>
            <div className={styles.username}>محمد بن بندر الوشيقيري</div>
          </div>
        </div>
        <div className={styles.user_items}>
          <div className={styles.total_items}>3 منتجات</div>
          <div className={styles.items}>
            <Item />
            <Item />
            <Item />
            <Item />
          </div>
        </div>
      </div>

      <div className={styles.totals}></div>
    </div>
  );
};

export default Result;
