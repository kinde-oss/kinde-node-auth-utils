import {nodeResolve} from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

export default {
  input: 'src/index.js',
  plugins: [nodeResolve(), commonjs(), json()],
  output: [
    {
      dir: 'dist/esm',
      format: 'esm',
      exports: 'named',
      sourcemap: true
    },
    {
      dir: 'dist/cjs',
      format: 'cjs',
      exports: 'named',
      sourcemap: true
    }
  ]
};
