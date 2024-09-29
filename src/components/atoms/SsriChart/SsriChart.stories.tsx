import type { Meta, StoryObj } from '@storybook/react';
import { within, screen } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import SsriChart from './SsriChart';

const meta: Meta<typeof SsriChart> = {
  title: 'Atoms/SsriChart',
  component: SsriChart,
  tags: ['autodocs'],
  args: {
    SRRI: 5,
  },
};

export default meta;

type Story = StoryObj<typeof SsriChart>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    expect(screen.getByText('Risk Level: 5 / 10')).toBeInTheDocument();

    const bars = canvas.getAllByRole('presentation');
    expect(bars.length).toBe(10);

    const highlightedBar = canvas.getByTestId('highlighted-bar');
    expect(highlightedBar).toHaveClass('bg-red');

    expect(
      screen.getByText(/The risk rating of a fund depends on the type of assets it invests in/i)
    ).toBeInTheDocument();
    
    expect(
      screen.getByText(/Keep in mind this applies over the longer term: five years or more/i)
    ).toBeInTheDocument();
  },
};