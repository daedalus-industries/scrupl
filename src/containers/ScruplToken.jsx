import React, { Component } from 'react';
import ScruplToken from '../components/ScruplToken';
import { getInstance } from '../helpers/contract';

class ScruplTokenContainer extends Component {

  constructor() {
    super();
    this.state = { tokenClient: null };
  }

  async componentDidMount() {
    const tokenClient = await getInstance('ScruplToken');
    this.setState({ tokenClient });
  }

  render() {
    if (!this.state.tokenClient) {
      return <p>{'loading...'}</p>;
    }
    return (
      <ScruplToken address={this.state.tokenClient.address} />
    );
  }

}

export default ScruplTokenContainer;
