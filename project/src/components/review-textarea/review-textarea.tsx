import {ChangeEvent, memo} from 'react';

type ReviewTextAreaProps = {
  isFormEnabled: boolean;
  changeReview: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

function ReviewTextArea({isFormEnabled, changeReview} : ReviewTextAreaProps): JSX.Element {
  return (
    <textarea
      className="reviews__textarea form__textarea"
      id="review"
      name="review"
      placeholder="Tell how was your stay, what you like and what can be improved"
      onChange={(e) => changeReview(e)}
      disabled={isFormEnabled}
    >
    </textarea>
  );
}

export default memo(ReviewTextArea);
