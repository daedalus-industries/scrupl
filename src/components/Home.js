import React from 'react';
import styles from './Home.module.scss';

const Home = ({
  balance,
  handleChange,
  handleSelect,
  handleSubmit,
  projects,
  selected,
  voteData,
}) => (
  <main className={styles.container}>
    <div className={styles.balance}>
      {'Scrupl Tokens: ' + balance}
    </div>
    <div className={styles.itemContainer}>
      <button className={styles.item} onClick={() => handleSelect(projects[0])}>
        {'Project ' + projects[0]}
      </button>
      <button className={styles.item} onClick={() => handleSelect(projects[1])}>
        {'Project ' + projects[1]}
      </button>
    </div>
    <div className={styles.form}>
      <h3>
        {'Submit Votes'}
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
      <button onClick={handleSubmit}>
        {'Submit Votes'}
      </button>
    </div>
  </main>
);

export default Home;
