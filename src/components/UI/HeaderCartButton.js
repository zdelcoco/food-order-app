import React from 'react';

import CartIcon from './CartIcon';
import styles from './HeaderCartButton.module.css'

const HeaderCartButton = props => {
  return(

    <button className={`${styles.button} ${props.className}`}>
      <CartIcon className={`${styles.icon}`}/>
      {props.text}
      {props.numItemsInCart > 0 && <div className={styles.badge}>{props.numItemsInCart}</div>}      
    </button>
  );
};

export default HeaderCartButton;