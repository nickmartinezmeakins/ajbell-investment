import type { Meta, StoryObj } from '@storybook/react';

import FundComponent from './FundComponent';

const meta: Meta<typeof FundComponent> = {
  title: 'Organisms/FundComponent',
  component: FundComponent,
  tags: ['autodocs'],
  args: {
    // children: 'Example',
    // variant: 'default'
  }
};

export default meta;

type Story = StoryObj<typeof FundComponent>;

export const Default: Story = {};
