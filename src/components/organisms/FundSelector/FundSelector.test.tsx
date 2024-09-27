import { render, screen } from '@testing-library/react';
import FundSelector from './FundSelector';
import { Fund } from '../../../types/fundTypes'; // Ensure the type is correctly imported

// Mock Data for Funds (same as in Storybook)
const mockGrowthFunds: Fund[] = [
  {
    id: 'fund1',
    name: 'Growth Fund 1',
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
        objective: 'Growth Fund 1 aims to provide capital growth over the long term.',
      },
      documents: [
        {
          id: 511596587,
          type: "Factsheet",
          url: "https://doc.morningstar.com/Document/93e682d5c64ed0c3525d037d1b7c7e90.msdoc?key=e33ffc7c69edde8ebee9cc33e90c47cccaca9c6eb3a0f372"
        },
      ],
      quote: {
        name: 'VT AJ Bell Growth Fund 1',
        marketCode: 'FUND:GRW1',
        lastPrice: 1.5,
        lastPriceDate: new Date('2024-07-01'),
        ongoingCharge: 0.25,
        sectorName: 'Growth Sector',
        currency: 'GBP',
      },
    },
  },
];

const mockResponsibleFunds: Fund[] = [
  {
    id: 'fund2',
    name: 'Responsible Fund 1',
    data: {
      ratings: {
        analystRating: 5,
        SRRI: 3,
      },
      portfolio: {
        asset: [
          { label: 'Stock', value: 70 },
          { label: 'Bond', value: 20 },
          { label: 'Cash', value: 10 },
        ],
      },
      profile: {
        objective: 'Responsible Fund 1 aims to invest in socially responsible assets.',
      },
      documents: [
        {
          id: 511596587,
          type: "Factsheet",
          url: "https://doc.morningstar.com/Document/93e682d5c64ed0c3525d037d1b7c7e90.msdoc?key=e33ffc7c69edde8ebee9cc33e90c47cccaca9c6eb3a0f372"
        },
      ],
      quote: {
        name: 'VT AJ Bell Responsible Fund 1',
        marketCode: 'FUND:RESP1',
        lastPrice: 1.7,
        lastPriceDate: new Date('2024-07-01'),
        ongoingCharge: 0.35,
        sectorName: 'Responsible Sector',
        currency: 'GBP',
      },
    },
  },
];

describe('FundSelector', () => {
  it('should render the heading', () => {
    render(<FundSelector strategies={{ growth: mockGrowthFunds, responsible: mockResponsibleFunds }} />);

    // Assert
    expect(screen.getByRole('heading', { name: /FundSelector/i })).toBeInTheDocument();
  });

  it('should display both growth and responsible funds', () => {
    render(<FundSelector strategies={{ growth: mockGrowthFunds, responsible: mockResponsibleFunds }} />);

    // Assert that growth and responsible fund names are rendered
    expect(screen.getByText(/Growth Fund 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Responsible Fund 1/i)).toBeInTheDocument();
  });
});