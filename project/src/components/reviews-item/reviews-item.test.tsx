import { render, screen } from '@testing-library/react';
import ReviewsItem from './reviews-item';
import { makeFakeReview } from '../../utils/mocks';
import { getDisplayFormattedDateComment } from '../../common';

describe('Component: ReviewsItem', () => {
  it('should render correctly', () => {
    const fakeReview = makeFakeReview();
    const reviewViewDate = getDisplayFormattedDateComment(fakeReview.date);

    render(
      <ReviewsItem
        comment={fakeReview.comment}
        date={fakeReview.date}
        id={fakeReview.id}
        rating={fakeReview.rating}
        user={fakeReview.user}
      />
    );

    expect(screen.getByText(fakeReview.user.name)).toBeInTheDocument();
    expect(screen.getByText(fakeReview.comment)).toBeInTheDocument();
    expect(screen.getByText(reviewViewDate)).toBeInTheDocument();
  });
});
