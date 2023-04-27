import React from 'react';

import styles from './Image.module.css';

const Image = props => {
  return (
    <div className={styles.slanted}>
      <img src={props.source} alt={props.alt} />
    </div>
  );
};

export default Image;