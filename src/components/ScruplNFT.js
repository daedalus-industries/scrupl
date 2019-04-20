import React from 'react';
import styles from './ScruplNFT.module.css';

const ScruplNFT = ({
  address,
  handleChange,
  handleMint,
  mintData,
  name,
  symbol,
}) => (
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
    <div className={styles.form}>
      <h3 className={styles.title}>
        {'Mint NFT'}
      </h3>
      <div className={styles.field}>
        <label htmlFor="to">
          {'To:'}
        </label>
        <input
          id="to"
          onChange={handleChange}
          type="string"
          value={mintData.to}
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="tokenId">
          {'Token ID:'}
        </label>
        <input
          id="tokenId"
          onChange={handleChange}
          type="string"
          value={mintData.tokenId}
        />
      </div>
    </div>
  </div>
);

export default ScruplNFT;
