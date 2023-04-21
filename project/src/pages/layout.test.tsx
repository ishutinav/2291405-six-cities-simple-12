import { createMemoryHistory } from 'history';
import HistoryRouter from '../components/history-route/history-route';
import Layout from './layout';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { AuthorizationStatus } from '../const';

const mockStore = configureMockStore();
const history = createMemoryHistory();


describe('Component: Layout', () => {
  it('should render correctly', () => {
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.Unknown,
        userData: null,
      }
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Layout />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('layout-container')).toBeInTheDocument();
  });
});
