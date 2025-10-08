// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon'

import tailwindcss from '@tailwindcss/vite';

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  vite: {
    
    server: {
      watch: {
        usePolling: true, // Útil en entornos como WSL2 o Docker
      },
    },
    plugins: [tailwindcss()],
  },

  integrations: [vue(), icon()],
});