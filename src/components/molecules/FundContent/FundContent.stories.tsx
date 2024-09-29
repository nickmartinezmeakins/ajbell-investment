import type { Meta, StoryObj } from '@storybook/react';
import FundContent from './FundContent';
import { Fund } from '../../../types/fundTypes'; // Import your Fund type

const mockSelectedFund: Fund = {
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
        type: 'Factsheet',
        url: 'https://doc.morningstar.com/Document/93e682d5c64ed0c3525d037d1b7c7e90.msdoc?key=e33ffc7c69edde8ebee9cc33e90c47cccaca9c6eb3a0f372',
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
};

// Meta definition
const meta: Meta<typeof FundContent> = {
  title: 'Molecules/FundContent',
  component: FundContent,
  tags: ['autodocs'],
  args: {
    selectedFund: mockSelectedFund,
  },
};

export default meta;

type Story = StoryObj<typeof FundContent>;

export const Default: Story = {};