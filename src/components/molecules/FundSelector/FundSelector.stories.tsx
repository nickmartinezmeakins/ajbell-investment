import type { Meta, StoryObj } from '@storybook/react';
import FundSelector from './FundSelector';
import { Fund } from '../../../types/fundTypes'; // Import your Fund type

// Mock Data for Funds
const mockGrowthFunds: Fund[] = [
  {
    id: 'fund1',
    name: 'Growth Fund 1',
    data: {
      ratings: {
        analystRating: 4,
        SRRI: 5,
        analystRatingLabel: 'Neutral',
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
        analystRatingLabel: 'Positive',
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

// Storybook Meta and Default Story
const meta: Meta<typeof FundSelector> = {
  title: 'Organisms/FundSelector',
  component: FundSelector,
  tags: ['autodocs'],
  args: {
    strategies: {
      growth: mockGrowthFunds,
      responsible: mockResponsibleFunds,
    },
  },
};

export default meta;

type Story = StoryObj<typeof FundSelector>;

export const Default: Story = {};