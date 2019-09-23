import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'vchsq9BFmKIVGV2KDKd7BBjPk7lqcnqW';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = { 
      reviews: []
    };
  }

  componentDidMount() {
    fetch(URL)
      .then(rest => rest.json())
      .then(response => this.setState({ reviews: response.results}));
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <h2>The Latest Reviews:</h2>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default LatestMovieReviewsContainer;