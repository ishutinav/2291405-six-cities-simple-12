import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { Action } from '@reduxjs/toolkit';
import thunk, { ThunkDispatch } from 'redux-thunk';
import userEvent from '@testing-library/user-event';
import { createAPI } from '../../services/api';
import { State } from '../../types/state';
import LoginPage from './login-page';
import HistoryRouter from '../../components/history-route/history-route';
import { AppRoute, AuthorizationStatus } from '../../const';

const history = createMemoryHistory();

const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];

const mockStore = configureMockStore<
  State,
  Action<string>,
  ThunkDispatch<State, typeof api, Action>
>(middlewares);

describe('Component: LoginPage', () => {

  it('should render correctly', async () => {
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.NoAuth,
        userData: null,
      },
    });

    history.push(AppRoute.Login);
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <LoginPage />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getAllByText('Sign in').length).toBe(2);

    const emailElement = screen.getByPlaceholderText('Email');
    const passwordElement = screen.getByPlaceholderText('Password');

    expect(emailElement).toBeInTheDocument();
    expect(passwordElement).toBeInTheDocument();

    await userEvent.type(emailElement, 'Oliver.conner@gmail.com');
    await userEvent.type(passwordElement, '123456Aa');

    expect(screen.getByDisplayValue(/Oliver.conner@gmail.com/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/123456Aa/i)).toBeInTheDocument();
  });
});
