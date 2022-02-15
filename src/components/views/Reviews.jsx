import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsFetch } from '../../services/FilmAPI';
const ReviewsPage = () => {
  const { moviesId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    ReviewsFetch(moviesId).then(setReviews);
  }, [moviesId]);

  return (
    <>
      {reviews.length > 0 ? (
        reviews.map(review => (
          <li key={review.author}>
            <h3>AUTHOR: {review.author}</h3>
            <p>{review.content}</p>
            <a href={review.url} rel="noreferrer noopener" target="_self">
              Movie review
            </a>
          </li>
        ))
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </>
  );
};

export default ReviewsPage;
