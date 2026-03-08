import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'
import path from 'path'

export default defineConfig(({ command }) => ({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react':  ['react', 'react-dom', 'react-router-dom'],
          'vendor-motion': ['framer-motion'],
          'vendor-state':  ['zustand'],
        },
      },
    },
  },
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png'],
      workbox: {
        navigateFallback: '/ELibPortal/index.html',
        navigateFallbackDenylist: [/^\/ELibPortal\/(bukvar|reading-room|encyclopedia|dictionary-presentation|bukvar-presentation|reading-room-presentation)\//],
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
        maximumFileSizeToCacheInBytes: 4 * 1024 * 1024,
        runtimeCaching: [
          {
            urlPattern: /\.json$/,
            handler: 'CacheFirst' as const,
            options: {
              cacheName: 'word-data',
              expiration: { maxAgeSeconds: 60 * 60 * 24 * 30 },
            },
          },
        ],
      },
      manifest: {
        name: 'Школьная библиотека',
        short_name: 'Школа',
        description: 'Платформа для учёбы с радостью',
        theme_color: '#f59e0b',
        icons: [
          { src: 'pwa-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'pwa-512.png', sizes: '512x512', type: 'image/png' },
        ],
      },
    }),
  ],
  base: command === 'build' ? '/ELibPortal/' : '/',
  define: {
    __BUILD_NUMBER__: JSON.stringify(process.env.GITHUB_RUN_NUMBER ?? 'dev'),
    __BUILD_DATE__: JSON.stringify(new Date().toISOString().slice(0, 10)),
  },
}))
