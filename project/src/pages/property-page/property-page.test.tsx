import PropertyPage from './property-page';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { Action } from '@reduxjs/toolkit';
import MockAdapter from 'axios-mock-adapter';
import HistoryRouter from '../../components/history-route/history-route';
import { Route, Routes } from 'react-router';
import { createAPI } from '../../services/api';
import { State } from '../../types/state';
import { APIRoute, AppRoute, AuthorizationStatus } from '../../const';
import { makeFakeOffer } from '../../utils/mocks';

const api = createAPI();
const mockAPI = new MockAdapter(api);
const middlewares = [thunk.withExtraArgument(api)];

const history = createMemoryHistory({ initialEntries: [`${AppRoute.Room}/1`] });

const mockStore = configureMockStore<
  State,
  Action<string>,
  ThunkDispatch<State, typeof api, Action>
>(middlewares);

const fakeOffer = makeFakeOffer();
fakeOffer.id = 1;

const store = mockStore({
  USER: {
    authorizationStatus: AuthorizationStatus.Auth,
  },
  DATA: {
    offer: fakeOffer,
    offers: [],
    isOffersLoading: false,
    neighbours: [],
    activeOfferId: null,
    hasError: false,
  },
  REVIEW: {
    reviews: [],
    hasError: false
  }
});

describe('Component: PropertyPage', () => {
  it('should render correctly', () => {
    mockAPI
      .onGet(`${APIRoute.Offers}/${fakeOffer.id}`)
      .reply(200, fakeOffer);

    mockAPI
      .onGet(`${APIRoute.Offers}/${fakeOffer.id}/nearby`)
      .reply(200, []);

    mockAPI
      .onGet(`${APIRoute.Comments}/${fakeOffer.id}`)
      .reply(200, []);

    history.push(`${AppRoute.Room}/${fakeOffer.id}`);

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Routes>
            <Route path={`${AppRoute.Room}/:id`} element={<PropertyPage />} />
          </Routes>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(fakeOffer.title)).toBeInTheDocument();
    expect(screen.getByText(fakeOffer.host.name)).toBeInTheDocument();
    expect(screen.getByText('What\'s inside')).toBeInTheDocument();
    expect(screen.getByText('Meet the host')).toBeInTheDocument();
  });
});
