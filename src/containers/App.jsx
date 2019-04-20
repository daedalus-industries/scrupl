import React, { Component } from 'react';
import App from '../components/App';
import { getInstance } from '../helpers/contract';

class AppContainer extends Component {

  constructor() {
    super();
    this.state = {
      scruplBox: null,
      test: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    const scruplBox = await getInstance('ScruplBox');
    this.setState({ scruplBox });
  }

  async handleClick() {
    const test = await this.state.scruplBox.test();
    this.setState({ test });
  }

  render() {
    if (!this.state.scruplBox) {
      return <p>{'loading...'}</p>;
    }
    return (
      <App
        handleClick={this.handleClick}
        test={this.state.test}
      />
    );
  }

}

export default AppContainer;
