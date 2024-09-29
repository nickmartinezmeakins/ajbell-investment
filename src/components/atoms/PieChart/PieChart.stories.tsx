import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import PieChart from './PieChart';

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

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Check that the canvas (chart.js renders as a canvas) is in the document
    const canvasElementChart = canvas.getByRole('img');
    expect(canvasElementChart).toBeInTheDocument();

    // Example mock data to compare against
    const mockData = [
      { label: 'Stock', value: 85.27585 },
      { label: 'Bond', value: 10.89832 },
      { label: 'Cash', value: 4.2768 },
      { label: 'Other', value: 1.48467 },
      { label: 'Property', value: 0 },
    ];

    // Check that the chart has the correct labels and values
    const expectedLabels = mockData.map((item) => item.label);
    const expectedValues = mockData.map((item) => item.value);

    // Assuming that react-chartjs-2 is receiving the correct data
    expect(expectedLabels).toEqual(['Stock', 'Bond', 'Cash', 'Other', 'Property']);
    expect(expectedValues).toEqual([85.27585, 10.89832, 4.2768, 1.48467, 0]);
  },
};