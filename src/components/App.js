import React from 'react';
import styles from './App.module.css';

const App = ({ handleClick, test }) => (
  <div className={styles.container}>
    <header className={styles.header}>
      <h1 className={styles.title}>
        {'scrupl'}
      </h1>
    </header>
    <main>
      <p>
        {test}
      </p>
      <button onClick={handleClick}>
        {'Test'}
      </button>
    </main>
  </div>
);

export default App;
