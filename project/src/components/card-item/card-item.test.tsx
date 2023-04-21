import { fireEvent, render, screen } from '@testing-library/react';
import CardItem from './card-item';
import { makeFakeOffer } from '../../utils/mocks';
import HistoryRouter from '../history-route/history-route';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';


const history = createMemoryHistory();
const fakeOffer = makeFakeOffer();

describe('Component: CardItem', () => {
  it('should render correctly', () => {
    const handleSetActiveCard = jest.fn();

    render(
      <HistoryRouter history={history}>
        <CardItem
          offer={fakeOffer}
          setActiveCard={handleSetActiveCard}
          componentClassName={'near-places__'}
        />
      </HistoryRouter>
    );

    expect(screen.getByText(fakeOffer.title)).toBeInTheDocument();
  });

  it('should redirect to card after click', () => {
    const handleSetActiveCard = jest.fn();

    render(
      <Router location={history.location} navigator={history}>
        <CardItem
          offer={fakeOffer}
          setActiveCard={handleSetActiveCard}
          componentClassName={'cities__'}
        />
      </Router>
    );

    fireEvent.click(screen.getAllByRole('link')[0]);
    expect(history.location.pathname).toBe(`/offer/${fakeOffer.id}`);
  });

  it('should set active offer after mouse enter', () => {
    const handleSetActiveCard = jest.fn();

    render(
      <HistoryRouter history={history}>
        <CardItem
          offer={fakeOffer}
          setActiveCard={handleSetActiveCard}
          componentClassName={'cities__'}
        />
      </HistoryRouter>
    );

    fireEvent.mouseOver(screen.getByRole('listitem'));
    expect(handleSetActiveCard).toBeCalledTimes(1);
  });
});
