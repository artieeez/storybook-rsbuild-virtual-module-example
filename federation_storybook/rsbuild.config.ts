import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginFoo } from './.storybook/custom-rsbuild-plugin/custom-rsbuild-plugin';

export default defineConfig({
  mode: "development",
  plugins: [
    pluginReact(),
    pluginFoo()
  ],
});
