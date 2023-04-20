import { render, screen } from '@testing-library/react';
import CardInsideList from './card-inside-list';
import { datatype } from 'faker';

describe('Component: CardInsideList', () => {
  it('should render correctly', () => {
    const fakeGoods = datatype.array(3).map(() => (datatype.string()));
    render(
      <CardInsideList goods={fakeGoods}/>
    );

    const items = screen.getAllByRole('listitem');
    expect(items.length).toBe(fakeGoods.length);
  });
});
