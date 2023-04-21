import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import HistoryRouter from '../history-route/history-route';
import CityList from './city-list';
import { CITIES } from '../../const';

const history = createMemoryHistory();
const mockStore = configureMockStore();

describe('Component: CityList', () => {

  it('should render correctly', () => {
    const store = mockStore({
      'DATA': {
        city: CITIES[0],
      }
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <CityList />
        </HistoryRouter>
      </Provider>
    );

    const citiesLength = Object.values(CITIES).length;
    expect(screen.getAllByRole('link').length).toBe(citiesLength);
  });
});
