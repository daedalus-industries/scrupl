import React from 'react';
import styles from './ScruplBox.module.css';

const ScruplBox = ({ address }) => (
  <div className={styles.container}>
    <h2 className={styles.title}>
      {'ScruplBox'}
    </h2>
    <p>
      {'Address: ' + address}
    </p>
  </div>
);

export default ScruplBox;
