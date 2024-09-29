import type { Meta, StoryObj } from '@storybook/react';
import { within, screen } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import StarRating from './StarRating';

const meta: Meta<typeof StarRating> = {
  title: 'Atoms/StarRating',
  component: StarRating,
  tags: ['autodocs'],
  args: {
    analystRating: 4,
  },
};

export default meta;

type Story = StoryObj<typeof StarRating>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    expect(screen.getByText(/Morningstar Rating™/i)).toBeInTheDocument();

    const filledStars = canvas.getAllByRole('img', { name: 'filled-star' });
    const emptyStars = canvas.getAllByRole('img', { name: 'empty-star' });
    
    expect(filledStars.length).toBe(4); // 4 filled stars
    expect(emptyStars.length).toBe(1); // 1 empty star (total of 5 stars)
  },
};

export const NoRating: Story = {
  args: {
    analystRating: 0,
  },
  play: async () => {
    expect(screen.getByText('No rating')).toBeInTheDocument();
  },
};