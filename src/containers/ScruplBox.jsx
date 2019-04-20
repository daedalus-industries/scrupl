import React, { Component } from 'react';
import ScruplBox from '../components/ScruplBox';
import { getInstance } from '../helpers/contract';

class ScruplBoxContainer extends Component {

  constructor() {
    super();
    this.state = {
      boxClient: null,
      budget: null,
      voteCount: null,
    };
    this.handleAddVote = this.handleAddVote.bind(this);
  }

  async componentDidMount() {
    const boxClient = await getInstance('ScruplBox');
    const voteCount = await boxClient.numVotes();
    const budget = await boxClient.getBudget();
    this.setState({ boxClient, budget, voteCount });
  }

  async handleAddVote(vote) {
    await this.state.boxClient.addVote(vote);
    const voteCount = await this.state.boxClient.numVotes();
    this.setState({ voteCount })
  }

  render() {
    if (!this.state.boxClient) {
      return <p>{'loading...'}</p>;
    }
    return (
      <ScruplBox
        address={this.state.boxClient.address}
        budget={this.state.budget}
        handleAddVote={this.handleAddVote}
        voteCount={this.state.voteCount}
      />
    );
  }

}

export default ScruplBoxContainer;
