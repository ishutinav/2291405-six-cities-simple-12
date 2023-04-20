import { configureMockStore } from '@jedmao/redux-mock-store';
import { AppRoute, AuthorizationStatus, CITIES } from '../../const';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import HistoryRouter from '../history-route/history-route';
import App from './app';
import { render, screen } from '@testing-library/react';
import { makeFakeOffer } from '../../utils/mocks';

const mockStore = configureMockStore();
const fakeOffer = makeFakeOffer();

const store = mockStore({
  USER: {
    authorizationStatus: AuthorizationStatus.Unknown,
    userData: null,
  },
  DATA: {
    city: CITIES[0],
    offers: [],
    isOffersLoading: false,
    offer: fakeOffer,
    neighbours: [],
    activeOfferId: null,
  },
  REVIEW: {
    reviews: [],
    hasError: false
  }
});

const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <App />
    </HistoryRouter>
  </Provider>
);

describe('Application Routing', () => {
  it('should render "MainPage" when user navigate to "/"', () => {
    history.push(AppRoute.Main);
    render(fakeApp);

    expect(screen.getByText('No places to stay available')).toBeInTheDocument();
  });

  it('should render "PropertyPage" when user navigate to "/offer/1"', () => {
    history.push(`${AppRoute.Room}/1`);
    render(fakeApp);

    expect(screen.getByText(/What's inside/i)).toBeInTheDocument();
    expect(screen.getByText(/Meet the host/i)).toBeInTheDocument();
    expect(global.scrollTo).toBeCalledTimes(1);
  });

  it('should render "NotFoundPage" when user navigate to non-existent route"', () => {
    history.push('/non-existent-route');
    render(fakeApp);

    expect(screen.getByText(/404. Page not found/i)).toBeInTheDocument();
  });

  it('should render "LoginPage" when user navigate to "/login"', () => {
    history.push(AppRoute.Login);
    render(fakeApp);

    expect(screen.getAllByText(/Sign in/i).length).toBe(2);
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

});
