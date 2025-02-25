import { defineConfig } from 'vite';
import commonjs from 'vite-plugin-commonjs';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  server: {
    port: 3000,
  },
  base: '/',
  plugins: [react(), commonjs(), tsconfigPaths()],
});
