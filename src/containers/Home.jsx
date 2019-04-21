import React, { Component } from 'react';
import Home from '../components/Home';
import { getInstance } from '../helpers/contract';
// import calculateSubmission from '../helpers/calculateSubmission';

class HomeContainer extends Component {

  constructor() {
    super();
    this.state = {
      boxClient: null,
      projects: null,
      selected: null,
      voteData: {
        value: 0,
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleVote = this.handleVote.bind(this);
  }

  async componentDidMount() {
    const boxClient = await getInstance('ScruplBox');
    const voteCount = await boxClient.numVotes();
    const min = 0;
    const max = 4;
    let item1 = Math.floor(Math.random() * (+max - +min) + +min);
    let item2 = Math.floor(Math.random() * (+max - +min) + +min);
    while (item1 === item2) item2 = Math.floor(Math.random() * (+max - +min) + +min);
    const projects = [item1, item2];
    this.setState({ boxClient, projects, voteCount });
  }

  async handleVote() {
    // const submission = calculateSubmission();
    // await this.state.boxClient.buyIndulgence(this.state.value.value, submission);
    console.log('value', this.state.voteData.value);
    console.log('selected', this.state.selected);
  }

  handleChange(event) {
    let state = this.state
    state.voteData[event.target.id] = event.target.value
    this.setState({ ...state })
  }

  handleSelect(selected) {
    this.setState({ selected })
  }

  render() {
    if (!this.state.boxClient) {
      return <p>{'loading...'}</p>;
    }
    return (
      <Home
        handleChange={this.handleChange}
        handleSelect={this.handleSelect}
        handleVote={this.handleVote}
        projects={this.state.projects}
        selected={this.state.selected}
        voteData={this.state.voteData}
      />
    );
  }

}

export default HomeContainer;
