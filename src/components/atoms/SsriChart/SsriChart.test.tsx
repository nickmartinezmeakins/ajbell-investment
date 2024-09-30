import { render, screen } from '@testing-library/react';
import SsriChart from './SsriChart';
import '@testing-library/jest-dom';

describe('SsriChart', () => {
  it('should render the correct risk level based on SRRI prop', () => {
    render(<SsriChart SRRI={5} />);
    
    expect(screen.getByText('Risk Level: 5 / 10')).toBeInTheDocument();
  });

  it('should render the correct number of bars', () => {
    render(<SsriChart SRRI={5} />);

    const bars = screen.getAllByRole('presentation');
    expect(bars.length).toBe(10);
  });

  it('should highlight the correct bar based on SRRI prop', () => {
    render(<SsriChart SRRI={5} />);

    const highlightedBar = screen.getByTestId('highlighted-bar');
    expect(highlightedBar).toHaveClass('bg-red');
  });

  it('should render the descriptive paragraphs', () => {
    render(<SsriChart SRRI={5} />);
    
    expect(
      screen.getByText(/The risk rating of a fund depends on the type of assets it invests in/i)
    ).toBeInTheDocument();
    
    expect(
      screen.getByText(/Keep in mind this applies over the longer term: five years or more/i)
    ).toBeInTheDocument();
  });
});