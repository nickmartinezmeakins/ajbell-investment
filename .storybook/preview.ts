import type { Preview } from '@storybook/react';

import '../src/app/globals.css';

const preview: Preview = {
  parameters: {
    backgrounds: {
      disable: true,
    },
    controls: {
      matchers: {
        date: /Date$/,
      },
    },
    layout: { default: 'fullscreen' },
  },
};

export default preview;
