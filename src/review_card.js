
import React from 'react';
import { Star } from '@mui/icons-material';
import './review.css'

const ReviewCard = ({ review }) => {
  return (
    <div className="review">
        <h3 className='reviewTitle'> Reviews </h3>
        <div className="ratingBox">
        <center>
        <p className="rating">   {review.rating} <Star sx={{display:'inline',fontSize:12}}/></p>
        </center>
        </div>
        <p className="comment">{review.comment}</p>
    </div>
  );
};

export default ReviewCard;
