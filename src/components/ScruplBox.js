import React from 'react';
import styles from './ScruplBox.module.css';

const ScruplBox = ({ address, handleAddVote, voteCount }) => (
  <div className={styles.container}>
    <h2 className={styles.title}>
      {'ScruplBox'}
    </h2>
    <p>
      {'Address: ' + address}
    </p>
    <p>
      {'Vote Count: ' + voteCount}
    </p>
    <button onClick={() => handleAddVote(0)}>
      {'Vote No'}
    </button>
    <button onClick={() => handleAddVote(1)}>
      {'Vote Yes'}
    </button>
  </div>
);

export default ScruplBox;
