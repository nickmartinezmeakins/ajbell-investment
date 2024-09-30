import { render, screen, fireEvent } from '@testing-library/react';
import FundContent from './FundContent';
import { Fund } from '../../../types/fundTypes';
import '@testing-library/jest-dom';

// Mock Data for selectedFund
const mockSelectedFund: Fund = {
  id: 'BYW8RV9',
  name: 'Cautious',
  data: {
    ratings: {
      analystRating: 4,
      SRRI: 5,
    },
    portfolio: {
      asset: [
        { label: 'Stock', value: 80 },
        { label: 'Bond', value: 15 },
        { label: 'Cash', value: 5 },
      ],
    },
    profile: {
      objective: 'Cautious aims to provide capital growth over the long term.',
    },
    documents: [
      {
        id: 511596587,
        type: 'Factsheet',
        url: 'https://doc.morningstar.com/Document/93e682d5c64ed0c3525d037d1b7c7e90.msdoc?key=e33ffc7c69edde8ebee9cc33e90c47cccaca9c6eb3a0f372',
      },
    ],
    quote: {
      name: 'VT AJ Bell Cautious',
      marketCode: 'FUND:GRW1',
      lastPrice: 1.5,
      lastPriceDate: new Date('2024-07-01'),
      ongoingCharge: 0.25,
      sectorName: 'Growth Sector',
      currency: 'GBP',
    },
  },
};


describe('FundContent', () => {
  it('should render the selected fund details', () => {
    render(<FundContent selectedFund={mockSelectedFund} />);

    expect(screen.getByRole('link', { name: /Factsheet/i })).toBeInTheDocument();
  });

  it('should render the "Select Fund" button and trigger localStorage update when clicked', () => {
    render(<FundContent selectedFund={mockSelectedFund} />);

    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');

    const selectButton = screen.getByText(/Select Fund/i);
    expect(selectButton).toBeInTheDocument();

    fireEvent.click(selectButton);

    expect(setItemSpy).toHaveBeenCalledWith('selectedFund', 'BYW8RV9');
  });
});