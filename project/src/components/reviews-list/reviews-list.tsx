import { useEffect, useState } from 'react';
import { sortCommentDateDown } from '../../common';
import { MAX_COUNT_COMMENTS } from '../../const';
import { useAppSelector } from '../../hooks';
import Review from '../../types/review';
import ReviewsItem from '../reviews-item/reviews-item';


function ReviewsList(): JSX.Element {
  const reviews = useAppSelector((state) => state.reviews);
  const [currentReviews, setCurrentReviews] = useState<Review[]>([]);

  useEffect(() => {
    setCurrentReviews(reviews);
  }, [reviews]);

  const comments = sortCommentDateDown(currentReviews).slice(0, MAX_COUNT_COMMENTS).map((comment) => (
    <ReviewsItem
      key={comment.id}
      comment={comment.comment}
      date={comment.date}
      id={comment.id}
      rating={comment.rating}
      user={comment.user}
    />)
  );

  return (
    <div>
      <h2 className="reviews__title">Reviews &middot;<span className="reviews__amount"></span>{reviews.length}</h2>
      <ul className="reviews__list">
        {comments}
      </ul>
    </div>
  );
}

export default ReviewsList;
