import type { Meta, StoryObj } from '@storybook/react';
import FundComponent from './FundComponent';
import { Fund } from '../../../types/fundTypes'; // Import your Fund type

// Mock Data for Funds
const mockGrowthFunds: Fund[] = [
  {
    id: 'BYW8RV9',
    name: 'Cautious',
    data: {
      ratings: {
        analystRating: 4,
        SRRI: 5,
      },
      portfolio: {
        asset: [
          { label: 'Stock', value: 70 },
          { label: 'Bond', value: 20 },
          { label: 'Cash', value: 10 },
        ],
      },
      profile: {
        objective: 'Cautious Fund aims to provide stable growth over the long term.',
      },
      documents: [
        {
          id: 511596587,
          type: "Factsheet",
          url: "https://doc.morningstar.com/Document/93e682d5c64ed0c3525d037d1b7c7e90.msdoc?key=e33ffc7c69edde8ebee9cc33e90c47cccaca9c6eb3a0f372"
        },
      ],
      quote: {
        name: 'VT AJ Bell Cautious Fund',
        marketCode: 'FUND:BYW8RV9',
        lastPrice: 1.2,
        lastPriceDate: new Date('2024-07-01'),
        ongoingCharge: 0.25,
        sectorName: 'Cautious Sector',
        currency: 'GBP',
      },
    },
  },
  {
    id: 'BYW8RX1',
    name: 'Balanced',
    data: {
      ratings: {
        analystRating: 3,
        SRRI: 4,
      },
      portfolio: {
        asset: [
          { label: 'Stock', value: 60 },
          { label: 'Bond', value: 30 },
          { label: 'Cash', value: 10 },
        ],
      },
      profile: {
        objective: 'Balanced Fund provides a balanced growth and risk exposure.',
      },
      documents: [
        {
          id: 511596587,
          type: "Factsheet",
          url: "https://doc.morningstar.com/Document/93e682d5c64ed0c3525d037d1b7c7e90.msdoc?key=e33ffc7c69edde8ebee9cc33e90c47cccaca9c6eb3a0f372"
        },
      ],
      quote: {
        name: 'VT AJ Bell Balanced Fund',
        marketCode: 'FUND:BYW8RX1',
        lastPrice: 1.4,
        lastPriceDate: new Date('2024-07-01'),
        ongoingCharge: 0.30,
        sectorName: 'Balanced Sector',
        currency: 'GBP',
      },
    },
  },
];

const mockResponsibleFunds: Fund[] = [
  {
    id: 'BN0S2V9',
    name: 'Responsible Growth',
    data: {
      ratings: {
        analystRating: 5,
        SRRI: 3,
        analystRatingLabel: 'Positive',
      },
      portfolio: {
        asset: [
          { label: 'Stock', value: 65 },
          { label: 'Bond', value: 25 },
          { label: 'Cash', value: 10 },
        ],
      },
      profile: {
        objective: 'Responsible Growth Fund aims to invest in socially responsible assets.',
      },
    },
    documents: [
      {
        id: 511596587,
        type: "Factsheet",
        url: "https://doc.morningstar.com/Document/93e682d5c64ed0c3525d037d1b7c7e90.msdoc?key=e33ffc7c69edde8ebee9cc33e90c47cccaca9c6eb3a0f372"
      },
    ],
    quote: {
      name: 'VT AJ Bell Responsible Growth Fund',
      marketCode: 'FUND:BN0S2V9',
      lastPrice: 1.7,
      lastPriceDate: new Date('2024-07-01'),
      ongoingCharge: 0.35,
      sectorName: 'Responsible Sector',
      currency: 'GBP',
    },
  },
];

// Storybook Meta and Default Story
const meta: Meta<typeof FundComponent> = {
  title: 'Organisms/FundComponent',
  component: FundComponent,
  tags: ['autodocs'],
  args: {
    strategies: {
      growth: mockGrowthFunds,
      responsible: mockResponsibleFunds,
    },
  },
};

export default meta;

type Story = StoryObj<typeof FundComponent>;

export const Default: Story = {};