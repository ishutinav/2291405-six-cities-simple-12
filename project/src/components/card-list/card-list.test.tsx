import { render, screen } from '@testing-library/react';
import CardList from './card-list';
import { makeFakeOffers } from '../../utils/mocks';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-route/history-route';

const history = createMemoryHistory();

describe('Component: CardList', () => {
  it('should render correctly', () => {
    const fakeOffers = makeFakeOffers();
    const handleChangeSelectedCard = jest.fn();

    render(
      <HistoryRouter history={history}>
        <CardList
          offers={fakeOffers}
          sectionClassName='cities__places'
          listClassName='cities__places-list'
          onChangeSelectedCard={handleChangeSelectedCard}
        >
          <h2 className="visually-hidden">Places</h2>
        </CardList>
      </HistoryRouter>
    );

    const items = screen.getAllByRole('listitem');
    expect(items.length).toBe(fakeOffers.length);
  });
});
