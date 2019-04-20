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
      voteData: { value: 0 },
    };
    this.handleAddVote = this.handleAddVote.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

  handleChange(event) {
    let state = this.state
    state.voteData[event.target.id] = event.target.value
    this.setState({ ...state })
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
        handleChange={this.handleChange}
        voteCount={this.state.voteCount}
        voteData={this.state.voteData}
      />
    );
  }

}

export default ScruplBoxContainer;
