import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

//const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const NYT_API_KEY = '';

require('es6-promise').polyfill();
require('isomorphic-fetch');

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {

    state = {
        reviews: [],
        searchTerm: "test"
    }

    componentDidMount(){
        this.handleChange
        fetch('https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=' + this.state.searchTerm+ `&api-key=${NYT_API_KEY}`)
        .then(res => res.json())
        .then(jsonData => {
            this.setState({ reviews: jsonData.results})
        })
    }

    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    render() {
        return(
            <div className='searchable-movie-reviews'>
                <form>
                    <input type='text' onChange={event => {this.handleChange(event)}}></input>
                    <button>Search</button>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer;
