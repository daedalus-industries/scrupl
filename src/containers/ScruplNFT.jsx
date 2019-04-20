import React, { Component } from 'react';
import ScruplNFT from '../components/ScruplNFT';
import { getInstance } from '../helpers/contract';

class ScruplNFTContainer extends Component {

  constructor() {
    super();
    this.state = {
      name: null,
      symbol: null,
      tokenClient: null,
    };
  }

  async componentDidMount() {
    const tokenClient = await getInstance('ScruplNFT');
    const name = await tokenClient.name();
    const symbol = await tokenClient.symbol();
    this.setState({ name, symbol, tokenClient });
  }

  render() {
    if (!this.state.tokenClient) {
      return <p>{'loading...'}</p>;
    }
    return (
      <ScruplNFT
        address={this.state.tokenClient.address}
        name={this.state.name}
        symbol={this.state.symbol}
      />
    );
  }

}

export default ScruplNFTContainer;
