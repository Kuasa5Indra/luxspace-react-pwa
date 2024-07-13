import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    registerType: 'autoUpdate',
    injectRegister: 'script',

    pwaAssets: {
      disabled: false,
      config: true,
    },

    includeAssets: ['favicon.svg', 'apple-touch-icon.png'],

    manifest: {
      name: 'LuxSpace',
      short_name: 'LuxSpace PWA',
      description: 'Aplikasi Luxspace menggunakan React dan berbasis PWA',
      theme_color: '#ffffff',
      start_url: "/",
      scope:"/luxspace-react-pwa/",
      display: "standalone",
      background_color: "#FFFFFF",
      icons: [
        {
          src: "/pwa-192x192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "any"
        },
        {
          src: "/pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any"
        },
        {
          src: "/pwa-maskable-192x192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "maskable"
        },
        {
          src: "/pwa-maskable-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable"
        }
      ]
    },

    workbox: {
      globPatterns: ['**/*.{js,css,html,svg,png,ico,jpg,jpeg}'],
      cleanupOutdatedCaches: true,
      clientsClaim: true,
    },

    devOptions: {
      enabled: false,
      navigateFallback: 'index.html',
      suppressWarnings: true,
      type: 'module',
    },
  })],
  base: '/luxspace-react-pwa/'
})