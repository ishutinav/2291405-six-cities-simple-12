import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import NotFoundPage from './not-found-page';
import HistoryRouter from '../../components/history-route/history-route';

const history = createMemoryHistory();

describe('Component: NotFoundPage', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <NotFoundPage>
          <b className="cities__status">404. Page not found</b>
        </NotFoundPage>
      </HistoryRouter>
    );

    expect(screen.getByText('404. Page not found')).toBeInTheDocument();
  });
});
