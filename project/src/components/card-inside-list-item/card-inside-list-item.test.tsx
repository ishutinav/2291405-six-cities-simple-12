import CardInsideListItem from './card-inside-list-item';
import {datatype} from 'faker';
import { render, screen } from '@testing-library/react';

describe('Component: CardInsideListItem', () => {

  it('should render correctly', () => {
    const fakeGood = datatype.string();
    render(
      <CardInsideListItem good={fakeGood} />);

    expect(screen.getByRole('listitem')).toBeInTheDocument();
  });
});
