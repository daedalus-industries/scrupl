import React from 'react';
import styles from './ScruplToken.module.css';

const ScruplToken = ({ address, name, symbol, totalSupply }) => (
  <div className={styles.container}>
    <h2 className={styles.title}>
      {'ScruplToken'}
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
    <p>
      {'Total Supply: ' + totalSupply}
    </p>
  </div>
);

export default ScruplToken;
