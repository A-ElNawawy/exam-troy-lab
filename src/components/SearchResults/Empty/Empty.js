import empty from "./../assets/empty.svg";

import styles from "./Empty.module.css";

const Empty = () => {
  return (
    <div className={styles.Empty}>
      <img src={empty} alt='empty' />
      <p>يجب عليك اختيار طالب اولا</p>
    </div>
  );
};

export default Empty;
