import type { BuildOptions } from 'esbuild'
import { build } from 'esbuild'
import svgrPlugin from 'esbuild-plugin-svgr'
import fg from 'fast-glob'
import path from 'node:path'

type Mode = 'dev' | 'prod'

const modeArg = process.argv.find((arg) =>
  arg.startsWith('--mode=')) ?? '--mode=dev'

const mode = (modeArg.split('=')[1] as Mode) || 'dev'

const isProd = mode === 'prod'

async function resolveEntryPoints(): Promise<string[]> {
  const patterns = ['src/{shared,entities,features,pages,app,widgets}/**/index.ts']
  const found = await fg(patterns, { onlyFiles: true, unique: true, dot: false })
  const filtered = found.filter((filePath) =>
    filePath.replace(/\\/g, '/'))
  return filtered.map((file) => path.resolve(file))
}

const entryPoints = await resolveEntryPoints()
if (entryPoints.length === 0) {
  console.warn('Не нашёл ни одного index')
}

const common: BuildOptions = {
  entryPoints,
  bundle: true,
  platform: 'neutral',
  target: ['es2018'],
  sourcemap: true,
  external: [
    '@emotion/react',
    '@emotion/styled',
    '@hookform/resolvers',
    '@mui/icons-material',
    '@mui/lab',
    '@mui/material',
    '@reduxjs/toolkit',
    'classnames',
    'framer-motion',
    'react',
    'react-dom',
    'react-hook-form',
    'react-redux',
    'react-toastify',
    'redux',
    'yup',
    'react-router',
    'react-router-dom',
  ],
  logLevel: 'info',
  metafile: true,
  treeShaking: true,
  minify: isProd,
  outbase: 'src',

  loader: {
    '.css': 'css',
    '.svg': 'dataurl',
  },

  plugins: [
    svgrPlugin({
      exportType: 'named',
      icon: true,
    }),
  ],
}

async function run(): Promise<void> {
  await build({
    ...common,
    format: 'esm',
    outdir: path.resolve('dist/esbuild/lib/esm'),
    outExtension: { '.js': '.mjs' },
  })

  await build({
    ...common,
    format: 'cjs',
    outdir: path.resolve('dist/esbuild/lib/cjs'),
    outExtension: { '.js': '.cjs' },
  })

  // eslint-disable-next-line no-console
  console.log(`Lib build (${isProd ? 'prod' : 'dev'}) complete (esm + cjs).`)
}

void run()
