import React from 'react';
import styles from './Home.module.scss';

const Home = ({
  handleChange,
  handleSelect,
  handleSubmit,
  projects,
  selected,
  voteData,
}) => (
  <main className={styles.container}>
    <div className={styles.itemContainer}>
      <button className={styles.item} onClick={() => handleSelect(projects[0])}>
        {'Project ' + projects[0]}
      </button>
      <button className={styles.item} onClick={() => handleSelect(projects[1])}>
        {'Project ' + projects[1]}
      </button>
    </div>
    <div className={styles.form}>
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
        {'Submit Vote'}
      </button>
    </div>
  </main>
);

export default Home;
