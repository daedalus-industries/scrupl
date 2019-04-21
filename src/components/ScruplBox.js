import React from 'react';
import styles from './ScruplBox.module.scss';

const ScruplBox = ({
  address,
  budget,
  handleAddVote,
  handleChange,
  handleCreateBox,
  voteCount,
  voteData,
}) => (
  <div className={styles.container}>
    <h2 className={styles.title}>
      {'ScruplBox'}
    </h2>
    <p>
      {'Address: ' + address}
    </p>
    <p>
      {'Budget: ' + budget}
    </p>
    <p>
      {'Vote Count: ' + voteCount}
    </p>
    <div className={styles.form}>
      <h3 className={styles.title}>
        {'Vote'}
      </h3>
      <div className={styles.field}>
        <label htmlFor="value">
          {'Value:'}
        </label>
        <input
          id="value"
          onChange={handleChange}
          type="number"
          value={voteData.value}
        />
      </div>
      <div className={styles.field}>
        <button onClick={() => handleAddVote(0)}>
          {'Vote No'}
        </button>
        <button onClick={() => handleAddVote(1)}>
          {'Vote Yes'}
        </button>
      </div>
    </div>
  </div>
);

export default ScruplBox;
