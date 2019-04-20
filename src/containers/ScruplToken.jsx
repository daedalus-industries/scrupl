import React, { Component } from 'react';
import ScruplToken from '../components/ScruplToken';
import { getInstance } from '../helpers/contract';

class ScruplTokenContainer extends Component {

  constructor() {
    super();
    this.state = {
      mintData: { to: '', value: 0 },
      name: null,
      symbol: null,
      tokenClient: null,
      totalSupply: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleMint = this.handleMint.bind(this);
  }

  async componentDidMount() {
    const tokenClient = await getInstance('ScruplToken');
    const name = await tokenClient.name();
    const symbol = await tokenClient.symbol();
    const totalSupply = await tokenClient.totalSupply();
    this.setState({ name, symbol, tokenClient, totalSupply });
  }

  handleChange(event) {
    let state = this.state
    state.mintData[event.target.id] = event.target.value
    this.setState({ ...state })
  }

  async handleMint() {
    await this.state.tokenClient.mint(this.state.mintData.to, this.state.mintData.value);
    const totalSupply = await this.state.tokenClient.totalSupply();
    this.setState({ mintData: {}, totalSupply });
  }

  render() {
    if (!this.state.tokenClient) {
      return <p>{'loading...'}</p>;
    }
    return (
      <ScruplToken
        address={this.state.tokenClient.address}
        handleChange={this.handleChange}
        handleMint={this.handleMint}
        mintData={this.state.mintData}
        name={this.state.name}
        symbol={this.state.symbol}
        totalSupply={this.state.totalSupply}
      />
    );
  }

}

export default ScruplTokenContainer;
