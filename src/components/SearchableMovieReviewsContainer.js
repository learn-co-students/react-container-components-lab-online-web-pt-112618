import React, { Component } from 'react';
import 'isomorphic-fetch';

import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'Ez5voRoX6Gmlh8QqUkbAsnz2AKZdcBjc';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
                  + `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends Component {

  constructor() {
    super();

    this.state = {
      searchTerm: '',
      reviews: []
    };
  }

  handleSearchChange = event => this.setState({ searchTerm: event.target.value });

  handleSubmit = event => {
    event.preventDefault();

    fetch(BASE_URL.concat(this.state.searchTerm))
      .then(res => res.json())
      .then(res => this.setState({ reviews: res.results }));
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='search-input'>Movie Reviews Search: </label>
          <input
            id='search-input'
            type="text"
            style={{width: 300}}
            onChange={this.handleSearchChange} />
          <button type="submit">Submit</button>
        </form>
        {this.state.reviews.length > 0 && <h2>Movie Reviews By Search:</h2>}
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
