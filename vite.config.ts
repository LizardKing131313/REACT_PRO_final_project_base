import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
import { patchCssModules } from 'vite-css-modules'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [
      svgr({
        svgrOptions: {
          exportType: 'named',
          ref: true,
          svgo: false,
          titleProp: true,
        },
        include: '**/*.svg',
      }),
      react(),
      tsconfigPaths(),
      patchCssModules({
        exportMode: 'both',
      }),
    ],
    css: {
      modules: {
        generateScopedName: '[name]__[local]__[hash:base64:5]',
      },
    },
    build: {
      target: 'es2020',
      minify: 'esbuild',
      sourcemap: false,
      chunkSizeWarningLimit: 600,
      rollupOptions: {
        output: {
          manualChunks: {
            react: ['react', 'react-dom', 'react-toastify'],
            emotion: ['@emotion/react', '@emotion/styled'],
            mui: ['@mui/icons-material', '@mui/lab', '@mui/material', 'classnames'],
            redux: ['redux', 'react-redux', '@reduxjs/toolkit'],
            router: ['react-router-dom'],
            form: ['react-hook-form', '@hookform/resolvers', 'framer-motion', 'yup'],
          },
        },
      },
    },
    define: {
      'process.env.API_URL': JSON.stringify(env.API_URL),
    },
  }
})
