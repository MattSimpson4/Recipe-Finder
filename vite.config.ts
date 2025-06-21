// vite.config.ts
import { defineConfig } from 'vite'; // 👈 from vitest/config
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Calculator/',
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
});
