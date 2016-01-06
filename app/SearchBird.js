import React from 'react';
import axios from 'axios';

const SearchBird = React.createClass({
  handleSubmit() {
    axios({
      method: 'get',
      url: 'http://bird-api.com/api/birds?familyName=' + this.refs.search.value,
    }).then((res) => {
      this.props.update(res.data);
    }).catch((err) => {
      console.log(err);
    });
  },

  render() {
    return (
      <div>
        <input ref='search' type='text' />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  },
});

export default SearchBird;
