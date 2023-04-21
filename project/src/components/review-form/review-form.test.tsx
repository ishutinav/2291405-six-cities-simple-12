import { configureMockStore } from '@jedmao/redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import { createAPI } from '../../services/api';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import ReviewForm from './review-form';
import HistoryRouter from '../history-route/history-route';
import { createMemoryHistory } from 'history';
import { makeFakeOffer, makeFakeReview, makeFakeReviews } from '../../utils/mocks';
import { APIRoute } from '../../const';
import userEvent from '@testing-library/user-event';
import { State } from '../../types/state';
import { Action } from '@reduxjs/toolkit';
import thunk, { ThunkDispatch } from 'redux-thunk';

const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];
const mockAPI = new MockAdapter(api);
const mockStore = configureMockStore<
  State,
  Action<string>,
  ThunkDispatch<State, typeof api, Action>
>(middlewares);

const history = createMemoryHistory();
const fakeOffer = makeFakeOffer();
const fakeReviews = makeFakeReviews();

describe('Component: ReviewForm', () => {
  it('should render correctly', () => {
    const store = mockStore({
      DATA: {
        offer: fakeOffer,
      },
      REVIEW: {
        reviews: [],
        hasError: false,
      }
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <ReviewForm />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(/To submit review please make sure to set/i)).toBeInTheDocument();
  });

  it('comment can be sent to server', async () => {
    const fakeReview = makeFakeReview();

    mockAPI
      .onPost(`${APIRoute.Comments}/1`)
      .reply(200, []);

    const store = mockStore({
      DATA: {
        offer: fakeOffer,
      },
      REVIEW: {
        reviews: fakeReviews,
        hasError: false,
      }
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <ReviewForm />
        </HistoryRouter>
      </Provider>
    );

    const star = screen.getAllByAltText('rating-star')[0];
    const textarea = screen.getByTestId('review');
    const sumbit = screen.getByRole('button');
    expect(sumbit).toBeDisabled();

    await userEvent.click(star);
    await userEvent.type(textarea, fakeReview.comment);
    expect(textarea).toBeEnabled();

  });
});
