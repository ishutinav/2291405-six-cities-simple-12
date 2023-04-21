import MainPage from './main-page';
import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { Action } from '@reduxjs/toolkit';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { createAPI } from '../../services/api';
import { State } from '../../types/state';
import HistoryRouter from '../../components/history-route/history-route';
import { makeFakeOffers } from '../../utils/mocks';
import { AppRoute, CITIES } from '../../const';
import Offer from '../../types/offer';

const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];
const history = createMemoryHistory();

const mockStore = configureMockStore<
  State,
  Action<string>,
  ThunkDispatch<State, typeof api, Action>
>(middlewares);

const fakeOffers = makeFakeOffers();
const getFakeCurrentOffers = (city: string, offers: Offer[]) => offers.filter((offer) => offer.city.name === city);

describe('Component: MainPage', () => {
  it('should render correctly', () => {
    const fakeCurrentOffers = getFakeCurrentOffers(CITIES[0], fakeOffers);
    const store = mockStore({
      DATA: {
        city: CITIES[0],
        offers: fakeCurrentOffers,
        isOffersLoading: false,
        offer: null,
        neighbours: [],
        activeOfferId: null,
      }
    });

    history.push(AppRoute.Main);

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <MainPage />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText('Cities')).toBeInTheDocument();
    const listItems = screen.getAllByRole('listitem', { name: 'place-card' });
    expect(listItems.length).toBe(fakeCurrentOffers.length);
  });
});
