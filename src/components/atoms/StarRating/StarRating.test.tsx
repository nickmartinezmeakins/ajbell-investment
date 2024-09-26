import { render, screen } from '@testing-library/react';

import { StarRating } from '.';

describe('StarRating', () => {
  it('should render the heading', () => {
    render(<StarRating />);

    // Assert
    screen.getByRole('heading', { name: /StarRating/i });
  });
});
