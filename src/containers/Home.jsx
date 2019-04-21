import React, { Component } from 'react';
import Home from '../components/Home';
import { getInstance } from '../helpers/contract';
import { updatePreference } from '../helpers/preference';

class HomeContainer extends Component {

  constructor() {
    super();
    this.state = {
      boxClient: null,
      projects: null,
      selected: null,
      preference: [
        [0, 0], // position 0
        [0, 0], // position 1
        [0, 0], // position 2
        [0, 0], // position 3
        [0, 0], // position 4
        [0, 0], // position 5
        [0, 0], // position 6
      ],
      voteData: {
        value: 0,
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    const boxClient = await getInstance('ScruplBox');
    const voteCount = await boxClient.numVotes();
    const projects = this.randomizeProjects();
    this.setState({ boxClient, projects, voteCount });
  }

  randomizeProjects() {
    const min = 0;
    const max = 4;
    let item1 = Math.floor(Math.random() * (+max - +min) + +min);
    let item2 = Math.floor(Math.random() * (+max - +min) + +min);
    while (item1 === item2) item2 = Math.floor(Math.random() * (+max - +min) + +min);
    const projects = [item1, item2];
    return projects;
  }

  async handleSubmit() {

    console.log('value', this.state.voteData.value);
    console.log('preference', this.state.preference);

    await this.state.boxClient.buyIndulgence(
      this.state.voteData.value,
      this.state.preference,
    );
  }

  handleChange(event) {
    let state = this.state
    state.voteData[event.target.id] = event.target.value
    this.setState({ ...state })
  }

  handleSelect(selected) {
    const preference = updatePreference(
      this.state.preference,
      this.state.projects,
      selected,
    );
    const projects = this.randomizeProjects();
    this.setState({ preference, projects, selected });
  }

  render() {
    if (!this.state.boxClient) {
      return <p>{'loading...'}</p>;
    }
    return (
      <Home
        handleChange={this.handleChange}
        handleSelect={this.handleSelect}
        handleSubmit={this.handleSubmit}
        projects={this.state.projects}
        selected={this.state.selected}
        voteData={this.state.voteData}
      />
    );
  }

}

export default HomeContainer;
