import { render, screen } from '@testing-library/react';
import StarRating from './StarRating';

describe('StarRating', () => {
  it('should render the heading', () => {
    render(<StarRating analystRating={4} />);
    expect(screen.getByText(/Morningstar Rating™/i)).toBeInTheDocument();
  });

  it('should render the correct number of filled stars based on analystRating', () => {
    render(<StarRating analystRating={4} />);
    
    const filledStars = screen.getAllByRole('img', { name: 'filled-star' });
    const emptyStars = screen.getAllByRole('img', { name: 'empty-star' });
    
    expect(filledStars.length).toBe(4); // 4 filled stars
    expect(emptyStars.length).toBe(1); // 1 empty star
  });

  it('should render "No rating" when totalStars is less than or equal to 1', () => {        
    // Mock the totalStars check by modifying the component or test code
    render(<StarRating analystRating={0} />);
    
    expect(screen.getByText('No rating')).toBeInTheDocument();
  });
});