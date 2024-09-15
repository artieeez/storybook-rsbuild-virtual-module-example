import type { RsbuildPlugin } from '@rsbuild/core';
import RspackVirtualModulePlugin from 'rspack-plugin-virtual-module';
import { correctImportPath } from './correctImportPath';

export type PluginFooOptions = {
  message?: string;
};

export const pluginFoo = (options: PluginFooOptions = {}): RsbuildPlugin => ({
  name: 'plugin-foo',
  setup(api) {
    api.modifyRspackConfig(config => {
      config.entry = {
        main: ['./__entry.js'],
      }
    })

    api.modifyBundlerChain(async (chain) => {
      console.log(">>> modifyBundlerChain")

      const entry = chain.entry('main').values()
      const context = chain.get("context")

      chain
        .plugin('RspackVirtualModulePlugin')
        .use(RspackVirtualModulePlugin, [
          {
            './__entry.js': `import('./__bootstrap.js');`,
            './__bootstrap.js': ((
              Array.isArray(entry)
                ? entry
                : Object.values(entry).flat()
            ) as string[])
              .map(
                (entryFile) =>
                  `import '${correctImportPath(
                    context || process.cwd(),
                    entryFile
                  )}';`
              )
              .join('\n'),
          },
        ]);
    });
  },
});