import { memo } from 'react';

type StarRatingItemProps = {
  isFormEnabled: boolean;
  rating: number;
  setOfferRating: (rating: number) => void;
}

function StarRatingItem({isFormEnabled, rating, setOfferRating}: StarRatingItemProps): JSX.Element {
  return (
    <div>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={rating}
        id={`${rating}-stars`}
        type="radio"
        onChange={() => setOfferRating(rating)}
        disabled={isFormEnabled}
      />
      <label htmlFor={`${rating}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </div>
  );
}

export default memo(StarRatingItem);
