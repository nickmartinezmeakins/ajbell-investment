import type { Meta, StoryObj } from '@storybook/react';

import PieChart  from './PieChart';

const meta: Meta<typeof PieChart> = {
  title: 'Atoms/PieChart',
  component: PieChart,
  tags: ['autodocs'],
  args: {
    // children: 'Example',
    // variant: 'default'
  }
};

export default meta;

type Story = StoryObj<typeof PieChart>;

export const Default: Story = {};
