import { render, screen } from '@testing-library/react';
import CityItem from './city-item';
import { CITIES } from '../../const';

describe('Component: CityItem', () => {
  const handleCityItemClick = jest.fn();
  it('should render correctly', () => {
    render(
      <CityItem
        city = {CITIES[2]}
        isActive
        onCityItemClick = {handleCityItemClick}
      />
    );

    expect(screen.getByText(CITIES[2])).toBeInTheDocument();
  });
});
