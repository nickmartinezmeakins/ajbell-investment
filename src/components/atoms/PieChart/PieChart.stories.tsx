import type { Meta, StoryObj } from '@storybook/react';

import PieChart  from './PieChart';

const meta: Meta<typeof PieChart> = {
  title: 'Atoms/PieChart',
  component: PieChart,
  tags: ['autodocs'],
  args: {
    data: [
      { label: 'Stock', value: 85.27585 },
      { label: 'Bond', value: 10.89832 },
      { label: 'Cash', value: 4.2768 },
      { label: 'Other', value: 1.48467 },
      { label: 'Property', value: 0 },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof PieChart>;

export const Default: Story = {};
