import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';

export default defineConfig({
  plugins: [pluginReact()],
  server: {
    port: 3000,
  },
  tools: {
    bundlerChain: (chain) => {
      chain.output.uniqueName('shell')
      chain.optimization.runtimeChunk('single')
    },
    rspack: {
      plugins: [
        new ModuleFederationPlugin({
          name: 'shell',
          remotes: {
            provider: 'provider@http://localhost:6006/mf-manifest.json',
          },
          shared: ['react', 'react-dom'],
        }),
      ],
    },
  },
});