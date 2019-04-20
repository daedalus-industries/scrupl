import React, { Component } from 'react';
import ScruplBox from '../components/ScruplBox';
import { getInstance } from '../helpers/contract';

class ScruplBoxContainer extends Component {

  constructor() {
    super();
    this.state = { boxClient: null };
  }

  async componentDidMount() {
    const boxClient = await getInstance('ScruplBox');
    this.setState({ boxClient });
  }

  render() {
    if (!this.state.boxClient) {
      return <p>{'loading...'}</p>;
    }
    return (
      <ScruplBox address={this.state.boxClient.address} />
    );
  }

}

export default ScruplBoxContainer;
