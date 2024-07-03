/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import basicSsl from '@vitejs/plugin-basic-ssl';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    basicSsl({
      /** name of certification */
      name: 'devCert',
      /** custom trust domains */
      // domains: ['*.custom.com'],
      /** custom certification directory */
      certDir:
        '/Users/andreisee/WebDev/Playground/react/forms/vite-ts-rhf-tailwind-zod-vitest/.devServer/cert',
    }),
  ],
  server: {
    host: true,
    port: 8000,
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: 'tests/setup.ts',
  },
});
