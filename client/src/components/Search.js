import React, { Component } from 'react'

import Query from "./Search/Query";
import Results from "./Search/Results";

import helpers from "../utils/helpers";

class Search extends Component {

  state = { 
    results: []
  }

  setQuery = (newQuery, newStart, newEnd) => {
    helpers.runQuery(newQuery, newStart, newEnd)
    .then((data) => {
      this.setState({ results: { docs: data.docs } });
    });
  }

  render() {
    return (
      <div className="main-container">

        {/* Note how we pass the setQuery function to enable Query to perform searches */}
        <Query updateSearch={this.setQuery} />
        {/* Note how we pass in the results into this component */}
        <Results results={this.state.results} />
      </div>
    );
  }
};

// Export the module back to the route
export default Search;