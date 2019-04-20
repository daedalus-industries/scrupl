import React, { Component } from 'react';
import ScruplToken from '../components/ScruplToken';
import { getInstance } from '../helpers/contract';

class ScruplTokenContainer extends Component {

  constructor() {
    super();
    this.state = {
      name: null,
      symbol: null,
      tokenClient: null,
      totalSupply: null,
    };
  }

  async componentDidMount() {
    const tokenClient = await getInstance('ScruplToken');
    const name = await tokenClient.name();
    const symbol = await tokenClient.symbol();
    const totalSupply = await tokenClient.totalSupply();
    this.setState({ name, symbol, tokenClient, totalSupply });
  }

  render() {
    if (!this.state.tokenClient) {
      return <p>{'loading...'}</p>;
    }
    return (
      <ScruplToken
        address={this.state.tokenClient.address}
        name={this.state.name}
        symbol={this.state.symbol}
        totalSupply={this.state.totalSupply}
      />
    );
  }

}

export default ScruplTokenContainer;
