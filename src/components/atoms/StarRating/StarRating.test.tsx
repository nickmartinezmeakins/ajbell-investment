import { render, screen } from '@testing-library/react';

import StarRating from '.';

const mockAnalystRating = 4; 

describe('StarRating', () => {
  it('should render the heading', () => {
    render(<StarRating analystRating={mockAnalystRating} />);

    // Assert
    screen.getByRole('heading', { name: /StarRating/i });
  });
});
