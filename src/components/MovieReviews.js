// Code MovieReviews Here
import React from 'react';

const MovieReviews = props =>
    <ul className='review-list'> 
        {props.reviews.map(review => (<li className='review' key={review.headline}>{review.headline}</li>))}
    </ul>


export default MovieReviews;
