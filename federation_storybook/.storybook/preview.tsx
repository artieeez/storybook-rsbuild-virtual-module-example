import type { Preview } from '@storybook/react'
import React from 'react';
import { Suspense } from 'react';



const withThemeProvider = (Story: React.FC<any>, context: any) => {
  return (
    <Suspense fallback="...loading theme" >
      <Story {...context} />
    </Suspense>
  );
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [withThemeProvider]
}

export default preview