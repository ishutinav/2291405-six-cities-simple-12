import {ChangeEvent, useState, useEffect, Fragment } from 'react';
import {MIN_CHARACTER_COMMENT, MAX_CHARACTER_COMMENT, RATING_STARS_COUNT} from '../../const';

function Review(): JSX.Element {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [isSubmitDisabled, setSubmitDisabled] = useState(false);

  useEffect(() => {
    const isDisable = !!(review.length > MAX_CHARACTER_COMMENT || review.length < MIN_CHARACTER_COMMENT || rating === 0);
    setSubmitDisabled(isDisable);
  }, [rating, review]);

  const onReviewChangeHandle = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
    setReview(target.value);
  };

  const ratingValues = Array.from({length: RATING_STARS_COUNT}, (_, index) => index + 1);

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratingValues.reverse().map((value: number) => (
          <Fragment key={value}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={value}
              id={`${value}-stars`}
              type="radio"
              onChange={() => setRating(value)}
            />
            <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>)
        )}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={onReviewChangeHandle}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
        To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">{MIN_CHARACTER_COMMENT} characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isSubmitDisabled}>Submit</button>
      </div>
    </form>
  );
}

export default Review;
