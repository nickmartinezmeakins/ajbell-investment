import { render, screen } from '@testing-library/react';

import { SsriChart } from '.';

describe('SsriChart', () => {
  it('should render the heading', () => {
    render(<SsriChart />);

    // Assert
    screen.getByRole('heading', { name: /SsriChart/i });
  });
});
