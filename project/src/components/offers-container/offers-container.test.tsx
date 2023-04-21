import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import OffersContainer from './offers-container';
import { makeFakeOffers } from '../../utils/mocks';
import HistoryRouter from '../history-route/history-route';
import Offer from '../../types/offer';
import { CITIES } from '../../const';

const mockStore = configureMockStore();
const history = createMemoryHistory();

const fakeOffers = makeFakeOffers();
const getFakeCurrentOffers = (city: string, offers: Offer[]) => offers.filter((offer) => offer.city.name === city);

describe('Component: OffersContainer', () => {
  it('should render correctly when has offers', () => {
    const fakeCurrentOffers = getFakeCurrentOffers(CITIES[0], fakeOffers);

    const store = mockStore({
      DATA: {
        city: CITIES[0],
        offers: fakeCurrentOffers,
        isOffersLoading: false,
        offer: null,
        neighbours: [],
        activeOfferId: null,
        hasError: false,
      }
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <OffersContainer />
        </HistoryRouter>
      </Provider>
    );

    const listItems = screen.getAllByRole('listitem', {name: 'place-card'});
    expect(listItems.length).toBe(fakeCurrentOffers.length);
  });
  it('should render correctly when offers by City empty', () => {

    const store = mockStore({
      DATA: {
        city: CITIES[0],
        offers: [],
        isOffersLoading: false,
        offer: null,
        neighbours: [],
        activeOfferId: null,
        hasError: false,
      }
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <OffersContainer />
        </HistoryRouter>
      </Provider>
    );
    expect(screen.getByText('No places to stay available')).toBeInTheDocument();
  });
});
