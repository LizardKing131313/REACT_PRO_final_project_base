import { build, context, type BuildOptions } from 'esbuild'
import { htmlPlugin } from 'esbuild-html-plugin'
import copy from 'esbuild-plugin-copy'
import svgrPlugin from 'esbuild-plugin-svgr'
import path from 'node:path'
import process from 'node:process'

type BuildMode = 'dev' | 'prod';

function getCliMode(): BuildMode {
  const arg = process.argv.find((argument) =>
    argument.startsWith('--mode=')) ?? '--mode=dev'
  const env = arg.split('=')[1]
  return env === 'prod' ? 'prod' : 'dev'
}

function hasServeFlag(): boolean {
  return process.argv.includes('--serve')
}

async function run(): Promise<void> {
  const isProd = getCliMode() === 'prod'
  const out = path.resolve('dist/esbuild')
  const common: BuildOptions = {
    entryPoints: [path.resolve('src/index.tsx')],
    outdir: out,
    bundle: true,
    splitting: true,
    format: 'esm',
    platform: 'browser',
    target: ['es2020'],
    treeShaking: true,
    sourcemap: true,
    minify: isProd,
    logLevel: 'info',
    define: {
      'process.env.NODE_ENV': JSON.stringify(isProd ? 'production' : 'development'),
      'process.env.API_URL': JSON.stringify(process.env.API_URL ?? ''),
    },
    entryNames: 'app',
    chunkNames: 'chunks/[name]-[hash]',
    assetNames: 'assets/[name]-[hash]',
    metafile: true,
    loader: { '.css': 'css', '.svg': 'dataurl' },
    plugins: [
      svgrPlugin({
        exportType: 'named',
        icon: true,
      }),
      copy({
        assets: {
          from: ['./public/*'],
          to: [''],
        },
      }),
      htmlPlugin({
        outfile: 'index.html',
        language: 'ru',
        createHeadElements: (outputUrls) => [
          '<meta charset="utf-8" />',
          '<meta name="viewport" content="width=device-width, initial-scale=1" />',
          '<meta name="description" content="Dog food market">',
          '<link rel="icon" type="image/svg" href="favicon.svg" />',
          ...outputUrls
            .filter((url) => url.endsWith('.css'))
            .map((url) => `<link rel="stylesheet" href="${url}">`),
          '<title>Dog Food</title>'
        ],
        createBodyElements: (outputUrls) => [
          '<div id="root"></div>',
          '<div id="tooltip-root"></div>',
          '<div id="dialog-root"></div>',
          ...outputUrls
            .filter((url) => url.endsWith('.js'))
            .map((url) => `<script type="module" src="${url}"></script>`),
        ],
      }),
    ],
  }
  if (isProd) {
    await build(common)
    return
  }
  const buildContext = await context(common)
  await buildContext.watch()
  if (hasServeFlag()) {
     await buildContext.serve({ servedir: out, port: 5555 })
  }
}

run().catch(() => process.exitCode = 1)
