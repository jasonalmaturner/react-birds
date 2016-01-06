import React from 'react';
import ReactDOM from 'react-dom';
import BirdContainer from './BirdContainer';

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>Birds</h1>
        <BirdContainer />
      </div>
    );
  },
});

ReactDOM.render(
  <App />,
  document.getElementById('bird-app')
);
