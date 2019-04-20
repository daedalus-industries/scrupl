import React, { Component } from 'react';
import ScruplNFT from '../components/ScruplNFT';
import { getInstance } from '../helpers/contract';

class ScruplNFTContainer extends Component {

  constructor() {
    super();
    this.state = { tokenClient: null };
  }

  async componentDidMount() {
    const tokenClient = await getInstance('ScruplNFT');
    this.setState({ tokenClient });
  }

  render() {
    if (!this.state.tokenClient) {
      return <p>{'loading...'}</p>;
    }
    return (
      <ScruplNFT address={this.state.tokenClient.address} />
    );
  }

}

export default ScruplNFTContainer;
