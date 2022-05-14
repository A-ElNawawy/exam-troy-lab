import { NavLink } from "react-router-dom";

import Home from "./assets/home.js";
import Wallet from "./assets/wallet.js";
import Paper from "./assets/paper.js";
import Cart from "./assets/cart.js";

import dots from "./assets/dots.svg";

import data from "./data/data.json";

import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to='/'>
            <Home />
            <p>{data.home}</p>
          </NavLink>
        </li>

        <li>
          <NavLink to='/wallet'>
            <Wallet />
            <p>{data.wallet}</p>
          </NavLink>
        </li>

        <li>
          <NavLink to='/sales'>
            <Paper />
            <p>{data.sales}</p>
          </NavLink>
        </li>

        <li>
          <NavLink to='/preOrders'>
            <Cart />
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
