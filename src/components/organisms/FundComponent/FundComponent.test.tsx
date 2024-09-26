import { render, screen } from '@testing-library/react';

import { FundComponent } from '.';

describe('FundComponent', () => {
  it('should render the heading', () => {
    render(<FundComponent />);

    // Assert
    screen.getByRole('heading', { name: /FundComponent/i });
  });
});
