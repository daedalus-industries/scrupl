import React from 'react';
import { NavLink } from 'react-router-dom'
import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <NavLink to="/" className={styles.link}>
      <span className={styles.logo}>
        {'¯\\_(ツ)_/¯'}
      </span>
      <h1 className={styles.title}>
        {'scrupl'}
      </h1>
    </NavLink>
    <nav className={styles.nav}>
      <NavLink className={styles.link} to="/ScruplBox">
        {'ScruplBox'}
      </NavLink>
      <NavLink className={styles.link} to="/ScruplNFT">
        {'ScruplNFT'}
      </NavLink>
      <NavLink className={styles.link} to="/ScruplToken">
        {'ScruplToken'}
      </NavLink>
    </nav>
  </header>
);

export default Header;
