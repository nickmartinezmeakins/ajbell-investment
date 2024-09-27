import type { Meta, StoryObj } from '@storybook/react';

import StarRating from './StarRating';

const meta: Meta<typeof StarRating> = {
  title: 'Atoms/StarRating',
  component: StarRating,
  tags: ['autodocs'],
  args: {
    analystRating: 4,
    analystRatingLabel: 'Neutral',
  },
};

export default meta;

type Story = StoryObj<typeof StarRating>;

export const Default: Story = {};
