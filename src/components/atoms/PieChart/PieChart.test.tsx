import { render, screen } from '@testing-library/react';

import { PieChart } from '.';

describe('PieChart', () => {
  it('should render the heading', () => {
    render(<PieChart />);

    // Assert
    screen.getByRole('heading', { name: /PieChart/i });
  });
});
