import { render, screen } from '@testing-library/react';
import PieChart from './PieChart';

describe('PieChart', () => {
  const mockData = [
    { label: 'Stock', value: 85.27585 },
    { label: 'Bond', value: 10.89832 },
    { label: 'Cash', value: 4.2768 },
    { label: 'Other', value: 1.48467 },
    { label: 'Property', value: 0 },
  ];

  it('should render a canvas for the Pie chart', () => {
    render(<PieChart data={mockData} />);

    const canvasElement = screen.getByRole('img');
    expect(canvasElement).toBeInTheDocument();
    
  });

  it('should have the correct chart labels and values', () => {
    render(<PieChart data={mockData} />);

    const expectedLabels = ['Stock', 'Bond', 'Cash', 'Other', 'Property'];
    const expectedValues = [85.27585, 10.89832, 4.2768, 1.48467, 0];

    expect(mockData.map((item) => item.label)).toEqual(expectedLabels);

    expect(mockData.map((item) => item.value)).toEqual(expectedValues);
  });
});