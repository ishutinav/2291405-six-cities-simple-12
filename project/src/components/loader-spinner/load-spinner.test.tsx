import { render, screen } from '@testing-library/react';
import LoadSpinner from './load-spinner';

describe('Component: LoadSpinner', () => {
  it('should render correctly', () => {
    render(<LoadSpinner />);

    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });
});
