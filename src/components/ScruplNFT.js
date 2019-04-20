import React from 'react';
import styles from './ScruplNFT.module.css';

const ScruplNFT = ({ address, name, symbol }) => (
  <div className={styles.container}>
    <h2 className={styles.title}>
      {'ScruplNFT'}
    </h2>
    <p>
      {'Address: ' + address}
    </p>
    <p>
      {'Name: ' + name}
    </p>
    <p>
      {'Symbol: ' + symbol}
    </p>
  </div>
);

export default ScruplNFT;
