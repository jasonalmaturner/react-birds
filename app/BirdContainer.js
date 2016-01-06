import React from 'react';
import SearchBird from './SearchBird';
import BirdList from './BirdList';

const BirdContainer = React.createClass({
  getInitialState() {
    return {
      birds: [],
    };
  },

  updateBirds(birds) {
    this.setState({
      birds: birds,
    });
  },

  render() {
    return (
      <div>
      Test
        <SearchBird update={this.updateBirds}/>
        <BirdList birds={this.state.birds}/>
      </div>
    );
  },
});

export default BirdContainer;
