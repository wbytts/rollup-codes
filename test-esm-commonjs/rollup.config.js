// npm install rollup -D 或者 npm install --global rollup
// npm install @rollup/plugin-commonjs -D
import commonjs from '@rollup/plugin-commonjs';
// npm install @rollup/plugin-node-resolve -D
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default [
  {
    // 你的项目入口文件
    input: './src/main.js',
    output: {
      dir: './dist', // 打包后代码输出的位置
      format: 'cjs', // 打包结果的输出格式 cjs 即 commonjs
    },
    // rollup使用到的插件
    plugins: [
      commonjs(), // rollup只支持ESM，这个插件用来解析commonjs格式
      nodeResolve(), // 模块间依赖关系分析
    ],
  },
];
