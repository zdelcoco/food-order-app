import React from 'react';

import Button from './HeaderCartButton';

import mealsImage from '../../assets/meals.jpg';
import styles from './Header.module.css';

const Header = props => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <Button />
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food' />
      </div>
    </React.Fragment>
  );
};

export default Header;