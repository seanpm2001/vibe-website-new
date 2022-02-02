import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import { svgBuilder } from './svgBuilder'; 
import { AutoImportDeps } from './autoImport';
import { configVisualizerConfig } from './visualizer';
import { configStyleImportPlugin } from './styleImport';

export function createVitePlugins() {
  const vitePlugins = [
    // AutoImportDeps(), // 自动按需引入依赖
    // svgBuilder('./src/icons/svg/'), // 已经将src/icons/svg/下的svg全部导入，无需再单独导入
    // Components({
    //   resolvers: [ElementPlusResolver({importStyle: "sass"})]
    // }),
    // configVisualizerConfig(),
    configStyleImportPlugin()
  ];

  return vitePlugins;
}
