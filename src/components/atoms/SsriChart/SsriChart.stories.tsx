import type { Meta, StoryObj } from '@storybook/react';

import  SsriChart  from './SsriChart';

const meta: Meta<typeof SsriChart> = {
  title: 'Atoms/SsriChart',
  component: SsriChart,
  tags: ['autodocs'],
  args: {
    // children: 'Example',
    // variant: 'default'
  }
};

export default meta;

type Story = StoryObj<typeof SsriChart>;

export const Default: Story = {};
