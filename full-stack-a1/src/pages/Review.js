import React, { useState } from 'react';

function Review() {
    const [rating, setRating] = useState(1);
    const [review, setReview] = useState('');
    const [reviews, setReviews] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const user = JSON.parse(localStorage.getItem('user'));

    const handleSubmitReview = (e) => {
        e.preventDefault();

        if (!review) {
            setErrorMessage("Review can't be empty.");
            return;
        }
        if (rating < 1) {
            setErrorMessage("Rating must be at least 1 star.");
            return;
        }
        if (review.length > 250) {
            setErrorMessage("Review can't exceed 250 characters.");
            return;
        }

        const newReview = {
            user: user.name,
            rating,
            review
        };

        setReviews([...reviews, newReview]);
        setReview('');
        setRating(0);
        setErrorMessage("");
    };

    return (
    <div className="container-review">
            {errorMessage && <div className="error-message">{errorMessage}</div>}

            <h1>Post a Review</h1>
            <form onSubmit={handleSubmitReview} className="review-form">
                {[1, 2, 3, 4, 5].map(star => (
                    <span 
                        key={star}
                        className="star-rating"
                        onClick={() => setRating(star)}
                        style={{ color: star <= rating ? '#FFD700' : '#aaa' }}
                    >
                        ★
                    </span>
                ))}
                <textarea 
                    className="textarea-review"
                    value={review} 
                    onChange={(e) => setReview(e.target.value)} 
                    placeholder="Write your review here..."
                    maxLength={250}
                    required
                />
                <div className="char-count">Characters left: {250 - review.length}</div>
                <button type="submit">Post Review</button>
            </form>

            <div className="reviews-list">
                {reviews.map((review, index) => (
                    <div key={index} className="single-review">
                        <h3>{review.user} ({review.rating} ★)</h3>
                        <p>{review.review}</p>
                    </div>
                ))}
            </div>
        </div>
  );
}

export default Review;