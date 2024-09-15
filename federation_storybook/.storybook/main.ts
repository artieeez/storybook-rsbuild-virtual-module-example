import type { StorybookConfig } from 'storybook-react-rsbuild'
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';

const NAME = "provider";

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
  ],
  framework: {
    name: 'storybook-react-rsbuild',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    check: true,
  },
  rsbuildFinal: (config) => {
    return {
      ...config,
      tools: {
        ...config.tools,
        tools: {
          // Doesn't work
          // bundlerChain: (chain) => {
          //   chain.output.publicPath("http://localhost:6006/")
          // },
        },
        rspack: (rspackConfig, { appendPlugins }) => {

          if (!rspackConfig.output) {
            rspackConfig.output = {}
          }
          rspackConfig.output.uniqueName = NAME
          rspackConfig.output.publicPath = "http://localhost:6006/"

          appendPlugins([
            new ModuleFederationPlugin({
              name: NAME,
              exposes: {
                './Button': './src/stories/button.tsx',
              },
              shared: {
                'react': { singleton: true },
                'react-dom': { singleton: true },
              },
            })
          ])

          return rspackConfig;
        }
      },
    }
  },
}

export default config