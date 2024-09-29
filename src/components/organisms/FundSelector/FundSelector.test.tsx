import { render, screen, fireEvent } from '@testing-library/react';
import FundSelector from './FundSelector';
import { Fund } from '../../../types/fundTypes';
import '@testing-library/jest-dom';

jest.mock('../../molecules/FundContent', () => {
  return function MockFundContent({ selectedFund }: { selectedFund: Fund }) {
    return <div data-testid="fund-content">{selectedFund.name}</div>;
  };
});

const mockStrategies = {
  growth: [
    {
      id: 'fund1',
      name: 'Growth Fund 1',
      description: 'Growth fund description',
      data: {
        ratings: { analystRating: 4.5, SRRI: 3 },
        portfolio: { asset: [{ label: 'Stocks', value: 80 }] },
        profile: { objective: 'Long-term growth' },
      },
    },
    {
      id: 'fund2',
      name: 'Growth Fund 2',
      description: 'Another growth fund description',
      data: {
        ratings: { analystRating: 4.0, SRRI: 4 },
        portfolio: { asset: [{ label: 'Stocks', value: 70 }] },
        profile: { objective: 'Balanced growth' },
      },
    },
  ],
  responsible: [
    {
      id: 'fund3',
      name: 'Responsible Fund 1',
      description: 'Responsible fund description',
      data: {
        ratings: { analystRating: 4.8, SRRI: 2 },
        portfolio: { asset: [{ label: 'Green Bonds', value: 60 }] },
        profile: { objective: 'Sustainable growth' },
      },
    },
  ],
};

describe('FundSelector Component', () => {
  it('should show correct content when handleStrategyChange is clicked', () => {
    render(<FundSelector strategies={mockStrategies} />);
    expect(screen.getByTestId('fund-content')).toHaveTextContent('Growth Fund 1');

    fireEvent.click(screen.getByTestId('select-strategy-responsible'));
    expect(screen.getByTestId('fund-content')).toHaveTextContent('Responsible Fund 1');
  });

  it('should show correct content when handleFundChange is selected', () => {
    render(<FundSelector strategies={mockStrategies} />);

    fireEvent.click(screen.getByTestId('select-fund-fund2'));
    expect(screen.getByTestId('fund-content')).toHaveTextContent('Growth Fund 2');

    fireEvent.click(screen.getByTestId('select-strategy-responsible'));
    expect(screen.getByTestId('fund-content')).toHaveTextContent('Responsible Fund 1');
  });
});