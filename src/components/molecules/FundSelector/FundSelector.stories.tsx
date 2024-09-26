import type { Meta, StoryObj } from '@storybook/react';

import  FundSelector  from './FundSelector';

const meta: Meta<typeof FundSelector> = {
  title: 'Organisms/FundSelector',
  component: FundSelector,
  tags: ['autodocs'],
  args: {
    // children: 'Example',
    // variant: 'default'
  }
};

export default meta;

type Story = StoryObj<typeof FundSelector>;

export const Default: Story = {};
