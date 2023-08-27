import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Review() {
    const user = JSON.parse(localStorage.getItem('user'));
    const { movieName } = useParams();
    const [rating, setRating] = useState(1);
    const [review, setReview] = useState('');
    const [reviews, setReviews] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const [averageRating, setAverageRating] = useState(0); // New state for average rating

    // Calculate the average rating from the reviews
    const calculateAverageRating = (reviews) => {
        if (reviews.length === 0) {
            return 0;
        }
        const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
        return totalRating / reviews.length;
    };

    // Retrieve reviews for the specific movie from local storage when the component mounts
    useEffect(() => {
        const storedReviews = JSON.parse(localStorage.getItem('reviews'));
        if (storedReviews) {
            const filteredReviews = storedReviews.filter(r => r.movie === movieName);
            setReviews(filteredReviews);
        }
    }, [movieName]);

    useEffect(() => {
        // Calculate and update the average rating when reviews change
        const averageRating = calculateAverageRating(reviews);
        setAverageRating(averageRating);
    }, [movieName, reviews]);

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
            movie: movieName,
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
        setRating(1);
        setErrorMessage("");

        // Calculate and update the average rating when a new review is added
        const updatedAverageRating = calculateAverageRating([...reviews, newReview]);
        setAverageRating(updatedAverageRating);
    };

    return (
        <div className="container-review">
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <div className='review-Card'>
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
                    <button className="review-Post" type="submit">Post Review</button>
                </form>

                <div className="average-rating">
                    Average Rating: {averageRating.toFixed(1)} ★
                </div>
            </div>

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
