import React from 'react';
import styles from './ScruplNFT.module.css';

const ScruplNFT = ({ address }) => (
  <div className={styles.container}>
    <h2 className={styles.title}>
      {'ScruplNFT'}
    </h2>
    <p>
      {'Address: ' + address}
    </p>
  </div>
);

export default ScruplNFT;
