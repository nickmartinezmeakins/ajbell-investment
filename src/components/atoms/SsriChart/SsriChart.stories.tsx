import type { Meta, StoryObj } from '@storybook/react';

import  SsriChart  from './SsriChart';

const meta: Meta<typeof SsriChart> = {
  title: 'Atoms/SsriChart',
  component: SsriChart,
  tags: ['autodocs'],
  args: {
    SRRI: 5,
  }
};

export default meta;

type Story = StoryObj<typeof SsriChart>;

export const Default: Story = {};
