import React, { useState } from 'react';
import './ReviewPage.css';

const ReviewPage = () => {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');



  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      name,
      rating,
      comment
    };
    setReviews([...reviews, newReview]);
    setName('');
    setRating(0);
    setComment('');
    
    if (rating < 3) {
      alert('Thank you for your honest review, We plan on doing great next time!');
    } else {
      alert('Thank you for your honest review, We\'ll keep doing the best that we can!');
    }
  };

  const renderStars = () => {
    return [...Array(5)].map((_, index) => (
      <span
        key={index}
        className={`star ${index < rating ? 'filled' : ''}`}
        onClick={() => handleStarClick(index)}
      >
        &#9733;
      </span>
    ));
  };

  return (
    <div className="container">
      <div className="review-wrapper">
    <div className="review-page">
      <h1>Customer Reviews</h1>
      
      <form className="review-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        
        <div className="rating-container">
          <div className="star-rating">
           {renderStars()}
          </div>
         
        </div>

        <textarea
          placeholder="Write a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
        
        <button type="submit">Submit Review</button>
      </form>

      <div className="reviews">
        {reviews.map((review, index) => (
          <div key={index} className="review">
            <h3>{review.name}</h3>
            <div className="star-rating">
              {renderStarsForReview(review.rating)}
            </div>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
  );
};

const renderStarsForReview = (rating) => {
  return [...Array(5)].map((_, index) => (
    <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>
      &#9733;
    </span>
  ));
};

export default ReviewPage;
