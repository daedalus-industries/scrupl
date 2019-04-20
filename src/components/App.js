import React from 'react';
import ScruplBox from '../containers/ScruplBox';
import ScruplNFT from '../containers/ScruplNFT';
import ScruplToken from '../containers/ScruplToken';
import styles from './App.module.css';

const App = () => (
  <div className={styles.container}>
    <header className={styles.header}>
      <h1 className={styles.title}>
        {'scrupl'}
      </h1>
    </header>
    <main>
      <ScruplBox />
      <ScruplNFT />
      <ScruplToken />
    </main>
  </div>
);

export default App;
