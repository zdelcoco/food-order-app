import React from 'react';

import HeaderCartButton from './HeaderCartButton';
import styles from './Header.module.css';

const Header = props => {
  return (
    <div className={styles.header}>
      <h1>{props.title}</h1>
      <HeaderCartButton text="Your Cart" numItemsInCart="2"/>      
    </div>
  );
};

export default Header;