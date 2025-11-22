import { build } from 'esbuild'
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

const common = {
  entryPoints,
  bundle: true,
  platform: 'neutral' as const,
  target: ['es2018'],
  sourcemap: true,
  external: [
    'react',
    'react-dom',
    'redux',
    'react-redux',
    '@reduxjs/toolkit',
    'react-router-dom',
    'react-hook-form',
    '@hookform/resolvers',
    'zod',
    'framer-motion',
  ],
  logLevel: 'info' as const,
  metafile: true,
  treeShaking: true,
  minify: isProd,
  outbase: 'src',
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
