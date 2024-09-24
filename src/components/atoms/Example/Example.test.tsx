import { render, screen } from '@testing-library/react';

import { Example } from '.';

describe('Example', () => {
  it('should render the heading', () => {
    render(<Example>Example</Example>);

    // Assert
    screen.getByRole('heading', { name: /Example/i });
  });
});
