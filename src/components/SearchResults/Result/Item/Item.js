import Price from "./../../../UIs/Price/Price";

import lays from "./../assets/lays.png";
import close from "./assets/close.svg";

import styles from "./Item.module.css";

const Item = () => {
  return (
    <div className={styles.Item}>
      <img src={lays} alt='' />
      <div className='details'>
        <div className='name'>شيبسي لايز 150 جم</div>
        <Price price={"7.50"} qty={"2"} />
      </div>
      <div className='left'>
        <img src={close} alt='' />
        <Price price={"15.00"} color='black' />
      </div>
    </div>
  );
};

export default Item;
