import { render, screen } from '@testing-library/react';
import ReviewsList from './reviews-list';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { makeFakeReviews } from '../../utils/mocks';
import { Provider } from 'react-redux';

const mockStore = configureMockStore();
const fakeReviews = makeFakeReviews();

describe('Component: ReviewsList', () => {

  const store = mockStore({
    'REVIEW': {
      reviews: fakeReviews,
    }
  });

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <ReviewsList />
      </Provider>
    );

    expect(screen.getByText(fakeReviews[0].user.name)).toBeInTheDocument();
    expect(screen.getByText(fakeReviews[0].comment)).toBeInTheDocument();
  });
});
