import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  return {
    plugins: [react()],
    // 'base' defines the base path for assets.
    // Using './' makes it work in any subdirectory (like GitHub Pages)
    base: './', 
    define: {
      'process.env': {}, // Fix crucial to prevent "process is not defined" error in browser
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
    }
  };
});