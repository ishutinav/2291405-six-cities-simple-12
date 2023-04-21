import {render, screen } from '@testing-library/react';
import CardSortingMenu from './card-sorting-menu';
import { SortTypes } from '../../const';


const palcesOptions = Object.values(SortTypes);

describe('Component: CardSortingMenu',() => {
  it('should render correctly', () => {
    const handleChangeSortType = jest.fn();

    render(
      <CardSortingMenu onChangeSortType={handleChangeSortType}/>
    );

    expect(screen.getByText('Sort by')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem').length).toBe(palcesOptions.length);
  });
});
