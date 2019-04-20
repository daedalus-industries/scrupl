import React, { Component } from 'react';
import ScruplNFT from '../components/ScruplNFT';
import { getInstance } from '../helpers/contract';

class ScruplNFTContainer extends Component {

  constructor() {
    super();
    this.state = {
      mintData: { to: '', tokenId: 0 },
      name: null,
      symbol: null,
      tokenClient: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleMint = this.handleMint.bind(this);
  }

  async componentDidMount() {
    const tokenClient = await getInstance('ScruplNFT');
    const name = await tokenClient.name();
    const symbol = await tokenClient.symbol();
    this.setState({ name, symbol, tokenClient });
  }

  handleChange(event) {
    let state = this.state
    state.mintData[event.target.id] = event.target.value
    this.setState({ ...state })
  }

  async handleMint(event) {
    await this.state.tokenClient.mint(this.state.mintData.to, this.state.mintData.tokenId);
    this.setState({ mintData: {} });
  }

  render() {
    if (!this.state.tokenClient) {
      return <p>{'loading...'}</p>;
    }
    return (
      <ScruplNFT
        address={this.state.tokenClient.address}
        handleChange={this.handleChange}
        handleMint={this.handleMint}
        mintData={this.state.mintData}
        name={this.state.name}
        symbol={this.state.symbol}
      />
    );
  }

}

export default ScruplNFTContainer;
