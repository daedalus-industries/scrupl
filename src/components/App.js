import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from './Header';
import Home from '../containers/Home';
import ScruplBox from '../containers/ScruplBox';
import ScruplNFT from '../containers/ScruplNFT';
import ScruplToken from '../containers/ScruplToken';
import styles from './App.module.scss';

const App = () => (
  <div className={styles.container}>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/ScruplBox" component={ScruplBox} />
      <Route exact path="/ScruplNFT" component={ScruplNFT} />
      <Route path="/ScruplToken" component={ScruplToken} />
    </Switch>
  </div>
);

export default App;
