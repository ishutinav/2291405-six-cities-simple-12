import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import AuthPanel from './auth-panel';
import { AppRoute, AuthorizationStatus } from '../../const';
import { makeFakeUserData } from '../../utils/mocks';
import HistoryRouter from '../history-route/history-route';


const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: AuthPanel', () => {

  it('should render correctly when user not authed', () => {
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.NoAuth
      },
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <AuthPanel />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText('Sign in')).toBeInTheDocument();
  });

  it('should render correctly when user authed', () => {
    const fakeUserData = makeFakeUserData();

    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.Auth,
        userData: fakeUserData,
      },
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <AuthPanel />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText('Sign out')).toBeInTheDocument();
    expect(screen.getByText(fakeUserData.email)).toBeInTheDocument();
  });

  it('should render correctly when location.pathname is /login', () => {
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.NoAuth,
      },
    });

    history.push(AppRoute.Login);
    render(
      <Provider store={store}>
        <Router location={history.location} navigator={history}>
          <AuthPanel />
        </Router>
      </Provider>
    );

    expect(screen.queryByText('Log in')).not.toBeInTheDocument();
  });
});
