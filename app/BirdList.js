import React from 'react';

const BirdList = React.createClass({
  render() {
    const birds = this.props.birds.map((bird, i) => {
      return (
        <div key={bird._id}>
          {bird.commonName}, {bird.familyName}
        </div>
      );
    });
    return (
      <div>
        {birds}
      </div>
    );
  },
});

export default BirdList;
