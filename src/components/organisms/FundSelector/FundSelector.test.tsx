import { render, screen } from '@testing-library/react';

import { FundSelector } from '.';

describe('FundSelector', () => {
  it('should render the heading', () => {
    render(<FundSelector />);

    // Assert
    screen.getByRole('heading', { name: /FundSelector/i });
  });
});
