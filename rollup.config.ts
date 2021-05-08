import type { RollupOptions } from 'rollup'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import { dirname } from 'path'
import pkg from './package.json'

const banner = `/**
 * @license ${pkg.name} v${pkg.version}
 *
 * Copyright (c) pnlybubbles
 *
 * This source code is licensed under the ${pkg.license} license found in the
 * \`license\` file in the root directory of this source tree.
 */`

const config: RollupOptions[] = [
  {
    input: 'src/index.ts',
    preserveModules: true,
    output: [
      {
        format: 'cjs',
        dir: dirname(pkg.main),
        exports: 'default',
        banner,
      },
      {
        format: 'es',
        dir: dirname(pkg.module),
        exports: 'default',
        banner,
      },
    ],
    plugins: [typescript()],
  },
  {
    input: 'src/index.ts',
    output: {
      file: pkg.types,
      banner,
    },
    plugins: [dts()],
  },
]

export default config
