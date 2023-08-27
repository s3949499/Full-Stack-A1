import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Review() {
    const user = JSON.parse(localStorage.getItem('user'));
    const { movieName } = useParams();
    const [rating, setRating] = useState(1);
    const [review, setReview] = useState('');
    const [reviews, setReviews] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    // Retrieve reviews for the specific movie from local storage when the component mounts
    useEffect(() => {
        const storedReviews = JSON.parse(localStorage.getItem('reviews'));
        if (storedReviews) {
            const filteredReviews = storedReviews.filter(r => r.movie === movieName);
            setReviews(filteredReviews);
        }
    }, [movieName]);

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
            movie: movieName,   // Include the movie title
            user: user.name,
            rating,
            review
        };

        // Get all reviews, add the new one, then save back to localStorage
        const allReviews = JSON.parse(localStorage.getItem('reviews')) || [];
        allReviews.push(newReview);
        localStorage.setItem('reviews', JSON.stringify(allReviews));

        // Update component's state
        setReviews([...reviews, newReview]);
        setReview('');
        setRating(0); // I'd suggest setting it to 1 or null so you don't unintentionally get 0-star reviews
        setErrorMessage("");
    };

    return (
        <div className="container-review">
            {errorMessage && <div className="error-message">{errorMessage}</div>}

            <h1 className='review-h1'>Post a Review for {movieName}</h1>
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
                        <h3>{review.user} ({review.rating} ★) - {review.movie}</h3>
                        <p>{review.review}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Review;
