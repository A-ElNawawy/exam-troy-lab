import { NavLink } from "react-router-dom";

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
          <NavLink to='/'>
            <img src={home} alt='home' />
            <p>{data.home}</p>
          </NavLink>
        </li>

        <li>
          <NavLink to='/wallet'>
            <img src={wallet} alt='wallet' />
            <p>{data.wallet}</p>
          </NavLink>
        </li>

        <li>
          <NavLink to='/sales'>
            <img src={paper} alt='paper' />
            <p>{data.sales}</p>
          </NavLink>
        </li>

        <li>
          <NavLink to='/preOrders'>
            <img src={cart} alt='cart' />
            <p>{data.preOrders}</p>
          </NavLink>
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
