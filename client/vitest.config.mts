import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';
import viteTsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), viteTsconfigPaths()],
  test: {
    include: ['**/*.test.ts'],
    globals: true,
    environment: 'jsdom',
  },
});
