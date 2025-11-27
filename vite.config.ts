import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, (process as any).cwd(), '');

  return {
    plugins: [react()],
    // 'base' define o caminho base para os assets. 
    // Usar './' faz com que funcione em qualquer subpasta (como no GitHub Pages)
    base: './', 
    define: {
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
    }
  };
});