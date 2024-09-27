import { render, screen } from '@testing-library/react';
import PieChart from '.';

const mockData = [
  { label: 'Category 1', value: 30 },
  { label: 'Category 2', value: 70 },
];

describe('PieChart', () => {
  it('should render the heading', () => {
    render(<PieChart data={mockData} />);

    // Assert
    expect(screen.getByRole('heading', { name: /PieChart/i })).toBeInTheDocument();
  });
});