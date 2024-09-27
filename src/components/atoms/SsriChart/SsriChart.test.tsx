import { render, screen } from '@testing-library/react';
import SsriChart from './SsriChart'; // Adjust the import if necessary

describe('SsriChart', () => {
  it('should render the SRRI chart', () => {
    // Mock SRRI value
    const mockSRRI = 5;

    // Render the component with the mock SRRI value
    render(<SsriChart SRRI={mockSRRI} />);

    // Assert that the component renders
    expect(screen.getByTestId('ssri-chart')).toBeInTheDocument(); // Adjust the query based on your component's structure
  });
});