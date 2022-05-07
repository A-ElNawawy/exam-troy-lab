import home from "./assets/home.svg";
import wallet from "./assets/wallet.svg";
import paper from "./assets/paper.svg";
import cart from "./assets/cart.svg";
import dots from "./assets/dots.svg";

import data from "./data/data.json";

import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.active}>
          <img src={home} alt='home' />
          <p>{data.home}</p>
        </li>
        <li>
          <img src={wallet} alt='wallet' />
          <p>{data.wallet}</p>
        </li>
        <li>
          <img src={paper} alt='paper' />
          <p>{data.sales}</p>
        </li>
        <li>
          <img src={cart} alt='cart' />
          <p>{data.preOrders}</p>
        </li>
        <li>
          <img src={dots} alt='dots' />
          <p>{data.more}</p>
        </li>
      </ul>

      <div className={styles.line}></div>
    </nav>
  );
};

export default Nav;
