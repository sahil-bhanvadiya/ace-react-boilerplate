import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    title: 'React Starter',
  },
  output: {
    distPath: {
      root: 'build',
    },
    assetPrefix: '/ace-react-boilerplate/',
  },
});
