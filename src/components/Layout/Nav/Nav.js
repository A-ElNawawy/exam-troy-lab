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
        <li>
          <a className={styles.active} href='#'>
            <img src={home} alt='home' />
            <p>{data.home}</p>
          </a>
        </li>

        <li>
          <a href='#'>
            <img src={wallet} alt='wallet' />
            <p>{data.wallet}</p>
          </a>
        </li>

        <li>
          <a href='#'>
            <img src={paper} alt='paper' />
            <p>{data.sales}</p>
          </a>
        </li>

        <li>
          <a href='#'>
            <img src={cart} alt='cart' />
            <p>{data.preOrders}</p>
          </a>
        </li>

        <li>
          <a href='#'>
            <img src={dots} alt='dots' />
            <p>{data.more}</p>
          </a>
        </li>
      </ul>

      <div className={styles.line}></div>
    </nav>
  );
};

export default Nav;
