import React from 'react';
import styles from './ScruplToken.module.css';

const ScruplToken = ({ address }) => (
  <div className={styles.container}>
    <h2 className={styles.title}>
      {'ScruplToken'}
    </h2>
    <p>
      {'Address: ' + address}
    </p>
  </div>
);

export default ScruplToken;
