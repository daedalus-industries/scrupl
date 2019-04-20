import React from 'react';
import styles from './ScruplToken.module.css';

const ScruplToken = ({
  address,
  handleChange,
  handleMint,
  mintData,
  name,
  symbol,
  totalSupply,
}) => (
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
    <div className={styles.form}>
      <h3 className={styles.title}>
        {'Mint Tokens'}
      </h3>
      <div className={styles.field}>
        <label htmlFor="to">
          {'To:'}
        </label>
        <input
          id="to"
          onChange={handleChange}
          type="text"
          value={mintData.to}
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="value">
          {'Value:'}
        </label>
        <input
          id="value"
          onChange={handleChange}
          type="number"
          value={mintData.value}
        />
      </div>
      <div className={styles.field}>
        <button onClick={handleMint}>
          {'Mint Tokens'}
        </button>
      </div>
    </div>
  </div>
);

export default ScruplToken;
